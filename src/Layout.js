import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/Home/HomePage'
import User from './components/User/User'
import App from './App'

const Layout = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path='/users' element={<User />} />
                </Route>
            </Routes>
        </>
    )
}

export default Layout