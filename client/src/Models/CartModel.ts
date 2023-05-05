import { ProductType } from "./ProductModel";
import { UserType } from "./UserModel";

export type CartType = {
    product: ProductType;
    size: number,
    amount: number,
}

export type CartStateType = {
    data: CartType[]
    totalMoney: number
    user: UserType | null
    limit?: number;
}

export enum CartActionKind {
    SET_PRODUCT = 'SET_PRODUCT',
    ADD_PRODUCT = "ADD_PRODUCT",
    UPDATE_PRODUCT = "UPDATE_PRODUCT",
    DELETE_PRODUCT = "DELETE_PRODUCT",

    INCREASE_AMOUNT = 'INCREASE_AMOUNT',
    DECREASE_AMOUNT = 'DECREASE_AMOUNT',


    SET_USER = 'SET_USER',
    UPDATE_USER = "UPDATE_USER",
    DELETE_USER = "DELETE_USER",
}