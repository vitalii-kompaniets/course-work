import React, { useState, useEffect } from "react";
import TextField from "../common/form/textField";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";
import MultiSelectField from "../common/form/multiSelectField";
import api from "../../api";
import { validator } from "../../utils/validator";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const EditUserPage = () => {
    const [qualities, setQualities] = useState({});
    const [errors, setErrors] = useState({});
    const [professions, setProfession] = useState();
    const [data, setData] = useState({
        qualities: []
    });

    const params = useParams();
    const { userId } = params;

    const allUsers = JSON.parse(localStorage.getItem("users"));

    const person = allUsers.find((user) => user._id === userId);
    // console.log(person);

    const personQualities = person.qualities.map((qual) => qual.name);
    console.log(personQualities);

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
        api.qualities.fetchAll().then((data) => setQualities(data));
    }, []);

    const handleChange = (target) => {
        setData({ [target.name]: target.value });
    };

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        profession: {
            isRequired: {
                message: "Обязательно выберите вашу профессию"
            }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Имя"
                            name="name"
                            value={person.name}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Электронная почта"
                            name="email"
                            value={person.email}
                            onChange={handleChange}
                            error={errors.email}
                        />

                        <SelectField
                            label="Профессия"
                            defaultOption="Choose..."
                            options={professions}
                            value={data.profession}
                            onChange={handleChange}
                            error={errors.profession}
                        />
                        <RadioField
                            options={[
                                { name: "Male", value: "male" },
                                { name: "Female", value: "female" },
                                { name: "Other", value: "other" }
                            ]}
                            value={person.sex}
                            name="sex"
                            onChange={handleChange}
                            label="Пол"
                        />
                        <MultiSelectField
                            options={qualities}
                            onChange={handleChange}
                            name="qualities"
                            label="Качества"
                        />
                        <button
                            type="submit"
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

EditUserPage.propTypes = {
    userId: PropTypes.string
};

export default EditUserPage;
