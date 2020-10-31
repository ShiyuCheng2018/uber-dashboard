import axios from "axios";
import { message } from "antd";

export default function Ajax(url, data = {}, method = "GET") {
    return new Promise((resolve, reject) => {
        // execute async ajax request
        let promise;
        if (method === "GET") {
            promise = axios.get(url, {
                params: data
            });
        } else {
            promise = axios.post(url, data);
        }
        // call resolve(value) if the request succeed
        promise
            .then((response) => {
                console.log(response.data);
                resolve(response.data);
            })
            .catch((error) => {
                // show the error message
                message.error("Error: " + error.message);
            });
    });
}
