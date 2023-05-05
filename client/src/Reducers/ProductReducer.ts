import { ProductActionKind, ProductStateType, ProductType } from "../Models/ProductModel"

export type ProductAction = {
    type: ProductActionKind;
    payload: any
}

export const productReducer = (state: ProductStateType, action: ProductAction) => {
    const { payload, type } = action
    // console.log(payload);

    switch (type) {
        case ProductActionKind.SET_PRODUCT: {

            return { ...state, isLoading: false, data: payload }
        }
        case ProductActionKind.ADD_PRODUCT: {

            return { ...state, isLoading: false }
        }

        case ProductActionKind.UPDATE_PRODUCT: {

            return { ...state, isLoading: false }
        }
        case ProductActionKind.DELETE_PRODUCT: {

            return { ...state, isLoading: false }
        }

        default:
            return state;
    }
}