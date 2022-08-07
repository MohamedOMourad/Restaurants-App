export interface AppTypes {
    selecItem?: Function,
    hideModel?: Function,
    onHide?: Function,
    show?: boolean
}

export interface Category {
    id: number;
    dateCreated: Date;
    dateUpdated: Date;
    name: string,
    products: Product[]
}

export interface CategoryAction {
    type: string,
    payload: Category
}

export interface Product {
    id: number,
    dateCreated: Date,
    dateUpdated: Date,
    name: string,
    description: string,
    price: number,
    popular: boolean,
    category: Category,
    quantity?: number
    imgUrl: string
}

export interface ProductAction {
    type: string,
    payload: Product
}
export interface ProductState {
    Product: Product[]
}
export interface Order {
    id?: number;
    dateCreated?: Date,
    dateUpdated?: Date,
    firstName: string,
    lastName: string,
    mobNum: string,
    city: string,
    address: string,
    orderNum?: string,
    completed?: boolean,
    orderLine?: OrderLine[]
}

export interface OrderAction {
    type: string,
    payload: Order
}
export interface OrderState {
    Order: Order[];
}

export interface OrderProp {
    order: Order;
}

export interface OrderCartAction {
    type: string,
    payload: Product
}

export interface OrderCartState {
    OrderCart: Product[]
}

export interface OrderLine {
    id: number,
    dateCreated: Date,
    dateUpdated: Date,
    quantity: number,
    product: Product,
    order: Order
}

export interface OrderLineAction {
    type: string,
    payload: OrderLine
}

export interface CheckOutOrder {

}