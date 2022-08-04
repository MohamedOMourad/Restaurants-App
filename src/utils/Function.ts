import { useDispatch } from "react-redux";
import { addToOrderCart, minusFromOrderCart } from "../redux/actions/OrderCart";
import { Product } from "../Types";

export const addQuntity = (val: number) => {
    return val + 1;
}



export const addOrder = (addMin: string, product: Product, dispatch: any) => {
    switch (addMin) {
        case '+':
            dispatch(addToOrderCart(product));
            break;
        case '-':
            dispatch(minusFromOrderCart(product));
            break;
    }
}

export const getQuantity = (id: number, ordersCart:Product[]) => {
    const cartItem = ordersCart?.find(item => item?.id === id);
    if (cartItem) {
        return cartItem.quantity;
    }
    return 0;
}