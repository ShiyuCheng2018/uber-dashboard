import Ajax from "./ajax";

// mock API requests
export const userLogin = (username, password) => {
    if (username === "admin" && password === "admin") {
        return Ajax(`/Mock/authentication/success.json`, { username, password }, "GET");
    } else {
        return Ajax(`/Mock/authentication/failure.json`, { username, password }, "GET");
    }
};
