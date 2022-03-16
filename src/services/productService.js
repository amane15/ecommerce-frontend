import http from "./httpService";

const apiEndPoint = "https://ecomapp-mern.herokuapp.com/api/products";

export function getProducts() {
    return http.get(`${apiEndPoint}`);
}

export function getProductWithId(id) {
    return http.get(`${apiEndPoint}/${id}`);
}

export function addProduct(product) {
    return http.post(`${apiEndPoint}/add`, product);
}
