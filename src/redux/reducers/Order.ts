import { OrderAction } from "../../Types"

const orderReducer = (state = [], action: OrderAction) => {
    switch (action.type) {
        case "GETALLORDERS":
            return action.payload;
        default:
            return state;
    }
};

export default orderReducer;