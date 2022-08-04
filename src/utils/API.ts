import axios from "axios";
import { getAllProducts } from "../redux/actions/Product";
// import { OrderDetails } from "../Types";

const API = axios.create({ baseURL: 'http://localhost:5000/' });

export const getProducts = async (dispatch: any) => {
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

