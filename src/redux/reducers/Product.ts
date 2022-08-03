import { ProductAction } from "../../Types";

const productReducer = (state = [], action: ProductAction) => {
    switch (action.type) {
        case "GETALLPRODUCTS":
            return action.payload;
        default:
            return state;
    }
};

export default productReducer;