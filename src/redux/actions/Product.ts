import { Product } from "../../Types";

export const getAllProducts = (action: Product)=>{
    return {
        type: 'GETALLPRODUCTS',
        payload:action
    }
}