import http from "./httpService";

const apiEndPoint = "https://ecomapp-mern.herokuapp.com/api/wishlist";

export function getWishlist() {
    return http.get(`${apiEndPoint}`);
}

export function addToWishlist(productId) {
    return http.post(`${apiEndPoint}/add`, {
        productId,
        quantity: 1,
    });
}

export function deleteProduct(productId) {
    return http.put(`${apiEndPoint}/deleteProduct`, {
        productId,
    });
}
