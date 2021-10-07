import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import MainPage from "./components/mainPage";
import Login from "./components/login";
import Users from "./components/users";
import UserProfile from "./components/userProfile";

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/login" component={Login} />
                <Route
                    path="/users/:userId"
                    render={(props) => <UserProfile {...props} />}
                />
                <Route path="/users" render={(props) => <Users {...props} />} />
            </Switch>
        </>
    );
};

export default App;
