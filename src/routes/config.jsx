/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from '../components/Login/Login';
import { CreateAccount } from '../components/CreateAccount/CreateAccount';
import { RenderAppsView } from '../components/CurrentAppsViews/Render/RenderAppsView';
import ProtectedRoutes from './ProtectedRoutes';
import SideBarNavigationViews from '../components/SidebarNavigationViews/SideBarNavigationViews';
export const RoutesConfig = () => {

    return (
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Routes>
                <Route path='*' element={<Login />} />
                <Route path='/Create-Account' element={<CreateAccount />} />
                <Route path='/Dashboard' element={
                    <ProtectedRoutes>
                        <SideBarNavigationViews />
                    </ProtectedRoutes>
                } />

            </Routes>

        </BrowserRouter>
    )


}