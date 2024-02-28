import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from '../pages/Login'

const isAuthorized = () => {
    const session = JSON.parse(localStorage.getItem("auth"))
    return session?.token
}
const ProtectedRoutes = () => {
    const isAuth = isAuthorized();
    return isAuth ? <Outlet /> : <Login />;
}


export default ProtectedRoutes
