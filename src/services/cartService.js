import http from "./httpService";

const apiEndPoint = "https://ecomapp-mern.herokuapp.com/api/cart";

export function getCart() {
    return http.get(`${apiEndPoint}`);
}

export function addToCart(productId) {
    return http.post(`${apiEndPoint}/add`, {
        productId,
        quantity: 1,
    });
}

export function updateQuantity(item, quantity) {
    item.quantity = quantity;
    const product = {
        productId: item._id,
        quantity: item.quantity,
        price: item.price,
    };
    if (product.quantity === 0) return deleteProduct(product.productId);
    return updateCart(product);
}

export function updateCart(item) {
    return http.put(`${apiEndPoint}/updateCart`, item);
}

export function deleteProduct(productId) {
    return http.put(`${apiEndPoint}/deleteProduct`, {
        productId,
    });
}

export function emptyCart() {
    return http.put(`${apiEndPoint}/empty`, {});
}
