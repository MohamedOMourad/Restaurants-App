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
