import axios from "axios";
// import { OrderDetails } from "../Types";

const API = axios.create({ baseURL: 'http://localhost:5000/' });

export const getProducts = async () => {
    try {
        const res = await API.get('/product');
        return res;
    } catch (e) {
        console.log(`Error On Getting Products  ${e}`);
    }
}

export const getOrders = async () => {
    try {
        const res = await API.get('/order');
        return res;
    } catch (e) {
        console.log(`Error On Getting Orders  ${e}`);
    }
}
// export const addOrder = async (orderDetails: OrderDetails) => {
//     try {
//         const res = await API.post('/order', orderDetails);
//         return res;
//     } catch (e) {
//         console.log(`Error On Getting Orders  ${e}`);
//     }
// }
