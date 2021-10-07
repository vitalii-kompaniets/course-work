import React, { useState, useEffect } from "react";
import api from "../api";
import PropTypes from "prop-types";

const UserProfile = ({ users }) => {
    const [userId, setUserId] = useState();
    useEffect(() => {
        api.users.getById().then((data) => setUserId(data));
    }, []);
    console.log(users, userId);
    return (
        <>
            <h1>{userId}</h1>
            <h2>Profession</h2>
            <p>Qualities</p>
            <p>Meeting</p>
            <h2>Rate</h2>
            <button>Все пользователи</button>
        </>
    );
};

UserProfile.propTypes = {
    match: PropTypes.object,
    users: PropTypes.array
};

export default UserProfile;
