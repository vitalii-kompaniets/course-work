import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import MainPage from "./layouts/mainPage";
import Login from "./layouts/login";
import Users from "./layouts/users";

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?" component={Users} />
                <Route path="/login" component={Login} />
                <Route path="/" exact component={MainPage} />
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default App;
