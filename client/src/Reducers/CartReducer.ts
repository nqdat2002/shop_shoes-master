import { CartActionKind, CartStateType, CartType } from "../Models/CartModel"

export type CartAction = {
    type: CartActionKind;
    payload: any
}


export const cartReducer = (state: CartStateType, action: CartAction) => {
    const { payload, type } = action
    console.log(payload);


    switch (type) {
        case CartActionKind.SET_PRODUCT: {

            return { ...state, isLoading: false, data: payload }
        }
        case CartActionKind.ADD_PRODUCT: {
            let check = 0;

            const data = state.data.map((value) => {
                if (value.product._id === payload._id && value.size === payload.size[0]) {
                    check = 1;
                    return { ...value, amount: value.amount + 1 }
                }
                return value
            })


            if (check) {
                return {
                    ...state,
                    data,
                }
            }

            return {
                ...state,
                data: [...state.data, { size: payload.size[0], amount: 1, product: payload }],
            }

        }

        case CartActionKind.UPDATE_PRODUCT: {

            return { ...state, isLoading: false }
        }
        case CartActionKind.INCREASE_AMOUNT: {

            const data = state.data.map((value) => {
                if (value.product._id === payload._id && value.size === payload.size[0]) {
                    if (value.amount > 4) {
                        console.log('Het hang');
                    } else {
                        return { ...value, amount: value.amount + 1 }
                    }
                }
                return value
            })
            return { ...state, data }
        }
        case CartActionKind.DECREASE_AMOUNT: {
            const data = state.data.map((value) => {
                if (value.product._id === payload._id && value.size === payload.size[0]) {
                    if (value.amount === 1) {
                    } else {
                        return { ...value, amount: value.amount - 1 }
                    }
                }
                return value
            })
            return { ...state, data }
        }
        case CartActionKind.DELETE_PRODUCT: {
            const data = state.data.filter((value) => value.product._id !== payload._id || value.size !== payload.size[0])
            return { ...state, data }

        }

        default:
            return state;
    }

}