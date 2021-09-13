import React from "react";
import Qualitie from "./qualitie";
// import Bookmark from "./bookmark";
import PropTypes from "prop-types";

const User = ({ user, handleDelete }) => {
    return (
        <tr>
            <td>{user.name}</td>
            <td>
                {user.qualities.map((item) => {
                    return <Qualitie item={item} key={item._id} />;
                })}
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}</td>
            <td>{/* <Bookmark /> */}</td>
            <td>
                <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-danger"
                >
                    Удалить
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    user: PropTypes.object,
    handleDelete: PropTypes.func
};

export default User;
