import React, {Component} from "react";
import {Route, Redirect} from 'react-router-dom';
import memory from "./memory";

const PrivateRoute = ({component: Component, ...rest}) => {
    const {user} = memory;

    return <Route {...rest} render={props => (user && user._id) ? (
        <Component {...props}/>
    ) : (
        <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
    )}/>
};

export default PrivateRoute;
