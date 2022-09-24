import axios from "axios";
import { Dispatch } from "redux";
import { getAllProducts } from "../redux/actions/Product";
import { getAllOrders } from "../redux/actions/order";
import { Order, Product } from "../Types";

const API = axios.create({ baseURL: 'https://restaurant-app-tawwr.herokuapp.com' });

export const getProducts = async (dispatch: Dispatch) => {
    try {
        const res = await API.get('/product');
        if (res?.status === 200) {
            dispatch(getAllProducts(res.data.data));
        } else {
            console.log("Error On Getting Products");
        }
    } catch (e) {
        console.log(`Error On Getting Products  ${e}`);
    }
}

export const getOrders = async (dispatch: Dispatch) => {
    try {
        const res = await API.get('/order');
        if (res?.status === 200) {
            dispatch(getAllOrders(res.data.data))
        } else {
            console.log("Error On Getting Orders");
        }
    } catch (e) {
        console.log(`Error On Getting Orders  ${e}`);
    }
}

export const updateOrderStus = async (dispatch: Dispatch, id: number) => {
    try {
        const res = await API.patch(`/order/${id}`);
        getOrders(dispatch);
    } catch (e) {
        console.log(`Error On Getting Orders  ${e}`);
    }
}

export const checkOutOrder = async (values: Order, ordersCart: Product[]) => {
    try {
        const res = await API.post('/order', { ...values, ordersCart });
    } catch (e) {
        console.log(`Error On Getting Orders  ${e}`);
    }
}

