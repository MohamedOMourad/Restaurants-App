export interface AppTypes {
    item?: itemTypes,
    menu?: itemTypes[],
    selecItem?: Function,
    hideModel?: Function,
    onHide?: Function,
    show?: boolean
}

export interface itemTypes {
    id: number,
    title: string,
    description: string,
    price: number,
    type: string,
    popular: boolean
}

export interface Category {
    id: number;
    dateCreated: Date;
    dateUpdated: Date;
    name: string
    products: Product[]
}

export interface CategoryAction {
    type: string,
        payload: Category
}

export interface Product {
    id: number;
    dateCreated: Date;
    dateUpdated: Date;
    name: string
    description: string
    price: number
    popular: boolean
    category: Category
    orderLine: OrderLine[]
}

export interface ProductAction {
    type: string,
    payload: Product
}
export interface ProductState {
    Product: Product[]
}
export interface Order {
    id: number;
    dateCreated: Date;
    dateUpdated: Date;
    firstName?: string
    lastName?: string
    mobNum?: string
    city?: string
    address?: string
    orderNum?: string
    completed?: boolean
    orderLine?: OrderLine[]
}
export interface orderAction {
    type: string,
    payload: Order
}

export interface OrderLine {
    id: number;
    dateCreated: Date;
    dateUpdated: Date;
    quantity: number
    product: Product
    order: Order
}

export interface OrderLineAction {
    type: string,
    payload: OrderLine
}
