import React, { useState, useEffect } from "react";
import TextField from "../common/form/textField";
import RadioField from "../common/form/radioField";
import SelectField from "../common/form/selectField";
import MultiSelectField from "../common/form/multiSelectField";
import { useParams, useHistory } from "react-router-dom";
import { validator } from "../../utils/validator";
import api from "../../api";

const EditUserPage = () => {
    const history = useHistory();
    const params = useParams();
    const { userId } = params;

    const allUsers = JSON.parse(localStorage.getItem("users"));

    const person = allUsers.find((user) => user._id === userId);

    const [data, setData] = useState({
        name: person.name,
        email: person.email,
        profession: person.profession.name,
        qualities: person.qualities,
        sex: person.sex
    });
    const [errors, setErrors] = useState({});
    const [qualities, setQualities] = useState({});
    const [professions, setProfession] = useState();

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
        api.qualities.fetchAll().then((data) => setQualities(data));
    }, []);

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        }
    };

    const handleChange = (target) => {
        setData({ [target.name]: target.value });
        console.log({ [target.name]: target.value });
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;

        const updateData = { ...data };
        api.users.update(person._id, updateData);
        history.push("/users");
    };

    const qualityIds = data.qualities.map((quality) => quality.value);
    console.log(qualityIds);
    console.log(person.qualities);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Имя"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            error="{errors.email}"
                        />
                        <TextField
                            label="Электронная почта"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            error={errors.email}
                        />
                        <SelectField
                            label="Выберите вашу профессию"
                            defaultOption="Choose..."
                            options={professions}
                            value={data.profession}
                            onChange={handleChange}
                            error={errors.profession}
                        />
                        <MultiSelectField
                            options={qualities}
                            value={person.qualities}
                            onChange={handleChange}
                            name="qualities"
                            label="Выберите ваши качества"
                        />
                        <RadioField
                            options={[
                                { name: "Male", value: "male" },
                                { name: "Female", value: "female" },
                                { name: "Other", value: "other" }
                            ]}
                            value={data.sex}
                            name="sex"
                            onChange={handleChange}
                            label="Выберите ваш пол"
                        />
                        <button
                            type="submit"
                            disabled={!isValid}
                            className="btn btn-primary w-100 mx-auto"
                        >
                            Обновить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditUserPage;
