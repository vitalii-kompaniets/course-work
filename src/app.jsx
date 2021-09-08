import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  return (
    <>
      <SearchStatus />
      <Users />
    </>
  );
};

export default App;
