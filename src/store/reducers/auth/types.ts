//тип стейта
export interface AuthState {
    isAuth: boolean;
}
//перечисление экшионов
export enum AuthActionEnum {
    SET_AUTH = 'SET_AUTH'
}

//тайп экшиона
interface SetAuthAction {
    type: AuthActionEnum.SET_AUTH;
    payload: boolean;
}

export type AuthAction = 
    SetAuthAction 

