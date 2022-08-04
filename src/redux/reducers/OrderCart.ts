import { OrderCartAction, Product } from '../../Types';

const orderCartReducer = (state: Product[] = [], action: OrderCartAction) => {
    switch (action.type) {
        case 'addToOrderCart':
            const inCart = state.find(product => product.id === action.payload.id);
            if (inCart) {
                return state.map(product => {
                    if (product.id === action.payload.id) {
                        return { ...product, quantity: product.quantity as number + 1 };
                    } else {
                        return product;
                    }
                });
            } else {
                return [...state, { ...action.payload, quantity: 1 }]
            };
        case 'minusFromOrderCart':
            const data = state.map(product => {
                if (product.id === action.payload.id) {
                    if (product.quantity! > 0) {
                        return { ...product, quantity: product.quantity as number - 1 }
                    } else {
                        return product;
                    }
                }
                else {
                    return product;
                }
            });
            return data.filter(product => product.quantity! > 0);
        default:
            return state;
    };
};

export default orderCartReducer;
