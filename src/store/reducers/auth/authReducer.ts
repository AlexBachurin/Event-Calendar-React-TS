import { AuthAction, AuthActionEnum, AuthState } from "./types";

const initialState: AuthState = {
    isAuth: false,
}

export default function authReducer(state = initialState, action : AuthAction) : AuthState {
    if (action.type === AuthActionEnum.SET_AUTH) {

    }

    return state;
}