import { Order } from "../../Types"

export const getAllOrders = (orders: Order) => {
    return {
        type: "GETALLORDERS",
        payload: orders
    }
}