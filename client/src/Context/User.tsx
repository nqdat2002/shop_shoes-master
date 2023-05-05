import axios from "axios";
import { createContext, PropsWithChildren, useReducer } from "react";
import { UserActionKind, UserStateType } from "../Models/UserModel";
import { userReducer } from "../Reducers/UserReducer";
import { apiUrl } from "./constants";

type UserContextType = {
  userState: UserStateType;
  checkAuth: () => Promise<void>;
};

const initialUserState: UserStateType = {
  userInfo: null,
  isLoading: true,
};
const initialContextState: UserContextType = {
  userState: initialUserState,
  checkAuth: () => Promise.resolve(void 0),
};
export const UserContext = createContext<UserContextType>(initialContextState);

const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, initialUserState);

  const checkAuth = async () => {
    try {
      const response = await axios.get(`${apiUrl}/product`);

      if (response.status === 200) {
        dispatch({
          type: UserActionKind.SET_USER,
          payload: response.data,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const dataUserContext = {
    userState,
    checkAuth,
  };
  return (
    <UserContext.Provider value={dataUserContext}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
