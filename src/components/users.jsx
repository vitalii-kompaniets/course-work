import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const renderPhrase = () => {
    if (users.length === 2 || users.length === 3 || users.length === 4) {
      return users.length + " человека тусанут с тобой сегодня";
    } else {
      return users.length + " человек тусанет с тобой сегодня";
    }
  };

  // const getBageClasses = () => {
  //   let classes = "badge bg-"
  //   if () {

  //   }
  // }

  return (
    <>
      {renderPhrase()}
      <table className="table">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Качества</th>
            <th>Профессия</th>
            <th>Встретился, раз</th>
            <th>Оценка</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((obj) => (
            <tr>
              <td key={obj._id}>{obj.name}</td>
              <td key={obj._id}>
                <span className="badge bg-primary"></span>
              </td>
              <td key={obj._id}>{obj.profession.name}</td>
              <td key={obj._id}>{obj.completedMeetings}</td>
              <td key={obj._id}>{obj.rate}</td>
              <td>
                <button
                  onClick={() => handleDelete()}
                  className="badge bg-danger"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
