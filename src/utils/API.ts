import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:5000/' });

export const getProducts = async () => {
    try {
        const res = await API.get('/product');
        return res.data.data;
    } catch (e) {
        console.log(`Error On Getting Products  ${e}`);
    }
}

export const getOrders = async () => {
    try {
        const res = await API.get('/order');
        return res.data.data;
    } catch (e) {
        console.log(`Error On Getting Orders  ${e}`);
    }
}
