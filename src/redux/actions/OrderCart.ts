import { Product } from "../../Types"

export const addToOrderCart = (product: Product) => {
    return {
        type: 'addToOrderCart',
        payload: product
    }
}
export const minusFromOrderCart = (product: Product) => {
    return {
        type: 'minusFromOrderCart',
        payload: product
    }
}