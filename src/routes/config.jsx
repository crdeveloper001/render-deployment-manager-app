// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from '../components/Login/Login';
import { CreateAccount } from '../components/CreateAccount/CreateAccount';
import { CurrentAppView } from '../components/CurrentAppsViews/CurrentAppView';

export const RoutesConfig = () => {

    return (
        <BrowserRouter future={{ v7_startTransition: true }}>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Create-Account' element={<CreateAccount />} />
                <Route path='/Dashboard' element={<CurrentAppView />} />

            </Routes>

        </BrowserRouter>
    )


}