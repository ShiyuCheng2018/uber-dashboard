import logo from "../../assets/img/Uber_logo.svg";
import React from "react";

export const LogoIcon = (props) => (
    <img src={logo} color={"#fff"} className={props.className} alt={"logo"} />
);
