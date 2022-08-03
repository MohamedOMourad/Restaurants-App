import { orderAction } from "../../Types"

const orderReducer = (state = [], action: orderAction) => {
    switch (action.type) {
        case "GETALLORDERS":
            return action.payload;
        default:
            return state;
    }
};

export default orderReducer;