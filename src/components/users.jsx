import React, { useState } from "react";
import User from "./user";

const Users = ({ users, ...rest }) => {
  return (
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
                  <span key={item._id} className={"badge m-1 bg-" + item.color}>
                    {item.name}
                  </span>
                );
              })}
            </td>
            <td>{obj.profession.name}</td>
            <td>{obj.completedMeetings}</td>
            <td>{obj.rate}</td>
            <td>
              <button className="btn btn-danger">Удалить</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Users;
