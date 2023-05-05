import { UserActionKind, UserStateType, UserType } from "../Models/UserModel"

export type UserAction = {
    type: UserActionKind,
    payload: UserType
}
export const userReducer = (state: UserStateType, action: UserAction) => {
    const { payload, type } = action
    console.log(payload);
    switch (type) {
        default:
            return state
    }

}