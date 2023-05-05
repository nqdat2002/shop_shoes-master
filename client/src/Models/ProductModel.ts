export type ProductType = {
    productName: string;

    href: string;

    img: string

    oldPrice: number

    price: number

    saleFlash: string

    size: number[]

    description?: String

    _id: string
}

export type ProductStateType = {
    data: ProductType[];
    isLoading: boolean;
    limit?: number;
    // sortBy?:
}

export enum ProductActionKind {
    SET_PRODUCT = 'SET_PRODUCT',
    ADD_PRODUCT = "ADD_PRODUCT",
    UPDATE_PRODUCT = "UPDATE_PRODUCT",
    DELETE_PRODUCT = "DELETE_PRODUCT",
}