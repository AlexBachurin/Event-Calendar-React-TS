import axios from "axios";

import { AppDispatch } from "../..";
import { iUser } from "../../../models/IUser";
import { ModalActionCreators } from "../login/action-creators";

import {
	AuthActionEnum,
	SetAuthAction,
	SetAuthErrorAction,
	SetAuthLoadingAction,
	SetUserAction,
} from "./types";

//action creators
export const AuthActionCreators = {
	setUser: (user: iUser): SetUserAction => ({
		type: AuthActionEnum.SET_USER,
		payload: user,
	}),
	setAuthLoading: (boolean: boolean): SetAuthLoadingAction => ({
		type: AuthActionEnum.SET_AUTH_LOADING,
		payload: boolean,
	}),
	setIsAuth: (isAuth: boolean): SetAuthAction => ({
		type: AuthActionEnum.SET_AUTH,
		payload: isAuth,
	}),
	setAuthError: (error: string): SetAuthErrorAction => ({
		type: AuthActionEnum.SET_AUTH_ERROR,
		payload: error,
	}),
	//async action creator for login
	login:
		(username: string, password: string) => async (dispatch: AppDispatch) => {
			try {
				dispatch(AuthActionCreators.setAuthLoading(true));
				//set timeout to imitate fetch to server
				setTimeout(async () => {
					const fetchUsers = await axios.get<iUser[]>("./users.json");
					const users = fetchUsers.data;
					const user = users.find((item) => {
						return item.username === username && item.password === password;
					});
					if (user) {
						console.log("success");
						//set to local storage
						localStorage.setItem("username", user.username);
						localStorage.setItem("auth", "true");
						dispatch(AuthActionCreators.setUser(user));
						dispatch(AuthActionCreators.setIsAuth(true));
						dispatch(ModalActionCreators.openModal(false));
					} else {
						console.log("not success");
						dispatch(
							AuthActionCreators.setAuthError("login is not successfull")
						);
					}
					dispatch(AuthActionCreators.setAuthLoading(false));
				}, 2000);
			} catch (error) {
				dispatch(AuthActionCreators.setAuthError("Ошибка при логине"));
			}
		},
	logout: () => async (dispatch: AppDispatch) => {
		//удаляем пользователя и обнуляем состояние
		localStorage.removeItem("auth");
		localStorage.removeItem("user");
		dispatch(AuthActionCreators.setUser({} as iUser));
		dispatch(AuthActionCreators.setIsAuth(false));
	},
};
