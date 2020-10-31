import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import storage from "./utils/storage";
import memory from "./utils/memory";
// import 'antd/dist/antd.css'

// read user from local, and store the user into memory
const user = storage.getUser();
memory.user = user;
ReactDOM.render(<App />, document.getElementById("root"));
