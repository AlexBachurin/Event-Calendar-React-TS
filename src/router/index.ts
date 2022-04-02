import Login from "../pages/Login";
import Event from "../pages/Event";
export interface Iroute {
    path: string;
    element: React.ComponentType;
    exact? : boolean;
}

export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/'
}

export const publicRoutes: Iroute[] = [
    {path: RouteNames.LOGIN, exact: true, element: Login}
]

export const privateRoutes: Iroute[] = [
    {path: RouteNames.EVENT , exact: true,element: Event}
]