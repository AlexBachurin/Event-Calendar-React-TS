import { iUser } from "../../../models/IUser";
import { AuthAction, AuthActionEnum, AuthState } from "./types";

const initialState: AuthState = {
	isAuth: false,
	error: "",
	isLoading: false,
	user: {} as iUser,
};

export default function authReducer(
	state = initialState,
	action: AuthAction
): AuthState {
	if (action.type === AuthActionEnum.SET_AUTH) {
		return { ...state, isAuth: action.payload, isLoading: false };
	}
	if (action.type === AuthActionEnum.SET_AUTH_LOADING) {
		return { ...state, isLoading: action.payload };
	}
	if (action.type === AuthActionEnum.SET_USER) {
		return { ...state, user: action.payload };
	}
	if (action.type === AuthActionEnum.SET_AUTH_ERROR) {
		return { ...state, error: action.payload, isLoading: false };
	}

	return state;
}
