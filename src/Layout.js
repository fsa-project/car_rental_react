import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/Home/HomePage'
import User from './components/User/User'
import App from './App'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'

const Layout = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />

                <Route path='/' element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path='/users' element={<User />} />
                </Route>
            </Routes>
        </>
    )
}

export default Layout