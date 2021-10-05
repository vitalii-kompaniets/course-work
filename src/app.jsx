import React from "react";
import NavBar from "./components/navBar";
import Users from "./components/users";
import { Route, Switch } from "react-router-dom";
import MainPage from "./components/mainPage";
import Login from "./components/login";

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/login" component={Login} />
                <Route path="/users" component={Users} />
            </Switch>
        </>
    );
};

export default App;
