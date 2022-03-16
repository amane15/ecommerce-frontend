import http from "./httpService";

const apiEndPoint = "https://ecomapp-mern.herokuapp.com/api/orders";

export function getOrders() {
    return http.get(`${apiEndPoint}`);
}

export function placeOrder(order, total) {
    const products = [];
    for (let item of order) {
        const { _id, quantity, price, img } = item;
        products.push({ _id, quantity, price, img });
    }
    return http.post(`${apiEndPoint}`, {
        products,
        total,
    });
}
