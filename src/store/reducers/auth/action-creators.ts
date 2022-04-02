import axios from "axios";
import { AppDispatch } from "../..";
import { iUser } from "../../../models/IUser";

import { AuthActionEnum, SetAuthAction, SetAuthErrorAction, SetAuthLoadingAction, SetUserAction } from "./types";
//action creators
export const AuthActionCreators = {
    setUser: (user: iUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setAuthLoading: (boolean: boolean): SetAuthLoadingAction => ({type: AuthActionEnum.SET_AUTH_LOADING, payload: boolean}),
    setIsAuth: (isAuth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: isAuth}),
    setAuthError: (error: string): SetAuthErrorAction => ({type: AuthActionEnum.SET_AUTH_ERROR, payload: error}),
    //async action creator for login
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setAuthLoading(true));
            const fetchUsers = await axios.get('./users.json');
            console.log(fetchUsers);
        } catch (error) {
            dispatch(AuthActionCreators.setAuthError('Ошибка при логине'))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        
    }
}