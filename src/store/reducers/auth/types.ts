import { iUser } from "../../../models/IUser";

//тип стейта
export interface AuthState {
    isAuth: boolean;
    user: iUser;
    isLoading: boolean;
    error: string;
}
//перечисление экшионов
export enum AuthActionEnum {
    SET_AUTH = 'SET_AUTH',
    SET_AUTH_LOADING = 'SET_AUTH_LOADING',
    SET_USER = 'SET_USER',
    SET_AUTH_ERROR = 'SET_ERROR'
}

//тайп экшиона
interface SetAuthAction {
    type: AuthActionEnum.SET_AUTH;
    payload: boolean;
}
interface SetAuthLoadingAction {
    type: AuthActionEnum.SET_AUTH_LOADING;
    payload: boolean;
}
interface SetUserAction {
    type: AuthActionEnum.SET_USER;
    payload: iUser;
}
interface SetAuthErrorAction {
    type: AuthActionEnum.SET_AUTH_ERROR;
    payload: string;
}

export type AuthAction = 
    SetAuthAction | SetAuthLoadingAction | SetUserAction | SetAuthErrorAction

