import React from "react";
import User from "./user";

const Users = ({ users }) => {
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
        {users.map((user) => {
          return <User user={user} />;
        })}
      </tbody>
    </table>
  );
};

export default Users;
