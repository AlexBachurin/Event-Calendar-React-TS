import React, { FC } from 'react'
import { Navigate } from 'react-router-dom';

interface Props {
    children: JSX.Element
    redirectTo: string
}
const RequireAuth: FC<Props> = ({ children, redirectTo } ) => {
    const auth = false;
    return auth ? children : <Navigate to={redirectTo} />

}

export default RequireAuth