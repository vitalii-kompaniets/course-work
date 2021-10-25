import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import MainPage from "./layouts/mainPage";
import Login from "./layouts/login";
import Users from "./layouts/users";
import EditUserPage from "./components/page/editUserPage";

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?/edit" component={EditUserPage} />
                <Route path="/users/:userId?" component={Users} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/" exact component={MainPage} />
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default App;
