import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./pages/login/login";
import PrivateRoute from "./utils/PrivateRoute";
import { Admin } from "./pages/admin/admin";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path={"/login"} component={Login} />
                    <PrivateRoute path={"/"} component={Admin} />
                </Switch>
            </BrowserRouter>
        );
    }
}
