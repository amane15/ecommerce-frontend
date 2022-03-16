import http from "./httpService";

const apiEndPoint = "https://ecomapp-mern.herokuapp.com/api/users";

export function getCurrentUser() {
    return http.get(`${apiEndPoint}/me`);
}

export function updateUser(user) {
    return http.put(`${apiEndPoint}/update`, { user });
}

export function register(user) {
    return http.post(`${apiEndPoint}/register`, {
        name: user.name,
        email: user.email,
        password: user.password,
    });
}
