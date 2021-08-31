import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const renderPhrase = (number) => {
    const lastOne = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) return "человек тусанет";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
    return "человек тусанет";
  };

  return (
    <>
      <h3>
        <span
          className={"badge bg-" + (users.length > 0 ? "primary" : "danger")}
        >
          {users.length > 0
            ? `${users.length} ${renderPhrase(users.length)} с тобой сегодня`
            : "Никто с тобой не тусанет"}
        </span>
      </h3>
      {users.length > 0 && (
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
              <tr key={obj._id}>
                <td>{obj.name}</td>
                <td>
                  {obj.qualities.map((item) => {
                    return (
                      <span
                        key={item._id}
                        className={"badge m-1 bg-" + item.color}
                      >
                        {item.name}
                      </span>
                    );
                  })}
                </td>
                <td>{obj.profession.name}</td>
                <td>{obj.completedMeetings}</td>
                <td>{obj.rate}</td>
                <td>
                  <button
                    onClick={() => handleDelete(obj._id)}
                    className="btn btn-danger"
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
