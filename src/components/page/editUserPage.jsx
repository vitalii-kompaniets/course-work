import React, { useState } from "react";
import TextField from "../common/form/textField";
import RadioField from "../common/form/radioField";
import { useParams, useHistory } from "react-router-dom";
import { validator } from "../../utils/validator";

const EditUserPage = () => {
    const history = useHistory();
    const params = useParams();
    const { userId } = params;

    const allUsers = JSON.parse(localStorage.getItem("users"));

    const person = allUsers.find((user) => user._id === userId);

    const [data, setData] = useState({
        name: person.name,
        email: person.email,
        sex: person.sex
    });
    const [errors, setErrors] = useState({});

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
        if (isValid) {
            history.push("/users");
        } else {
            return;
        }
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
