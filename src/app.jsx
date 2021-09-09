import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  return (
    <>
      <SearchStatus />
      <Users users={users} onDelete={() => handleDelete()} />
    </>
  );
};

export default App;
