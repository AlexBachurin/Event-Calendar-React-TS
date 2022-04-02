import React, { FC } from 'react'
import { Navigate } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';

interface Props {
    children: JSX.Element
    redirectTo: string
}
const RequireAuth: FC<Props> = ({ children, redirectTo } ) => {
    const {isAuth} = useTypedSelector(state => state.authReducer)
    return isAuth ? children : <Navigate to={redirectTo} />

}

export default RequireAuth