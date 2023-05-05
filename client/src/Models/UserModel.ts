import { ProductType } from "./ProductModel";

export type UserType = {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    purchasedList: ProductType[]
    address?: string
    avatar?: string
    phoneNumber?: string
    verifyToken?: string;
    stk?: number
}

export type UserStateType = {
    userInfo: UserType | null
    isLoading: boolean
}

export enum UserActionKind {
    SET_USER = 'SET_USER',
    ADD_USER = "ADD_USER",
    UPDATE_USER = "UPDATE_USER",
    DELETE_USER = "DELETE_USER",
}