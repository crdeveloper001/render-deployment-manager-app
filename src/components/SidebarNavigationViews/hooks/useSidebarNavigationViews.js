/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router';

const useSidebarNavigationViews = () => {
    const appNavi = useNavigate()
    const [currentSession, setCurrentSession] = useState(sessionStorage.getItem('payload'))
    const [currentViewSelected, setCurrentViewSelected] = useState({
        generalView: true,
        profileView: false,
        renderView: false,
        azureView: false,
        awsView: false
    })

    const closeSession = async () => {
        await sessionStorage.clear();

        if (sessionStorage.length === 0) {
            appNavi('/')
        }

    }

    const sidebarNavigationHandler = (e) => {

        let selection = e.target.innerText

        switch (selection) {
            case "Home":
                setCurrentViewSelected((prevState) => ({
                    ...prevState,
                    generalView: true,
                    profileView: false,
                    awsView: false,
                    azureView: false,
                    renderView: false
                }))
                break;
            case "Profile":
                setCurrentViewSelected((prevState) => ({
                    ...prevState,
                    generalView: false,
                    profileView: true,
                    awsView: false,
                    azureView: false,
                    renderView: false
                }))
                break;
            case "Render Apps":
                setCurrentViewSelected((prevState) => ({
                    ...prevState,
                    generalView: false,
                    profileView: false,
                    awsView: false,
                    azureView: false,
                    renderView: true
                }))
                break;
            case "AWS Apps":
                setCurrentViewSelected((prevState) => ({
                    ...prevState,
                    generalView: false,
                    profileView: false,
                    awsView: true,
                    azureView: false,
                    renderView: false
                }))
                break;
            case "Azure Apps":
                setCurrentViewSelected((prevState) => ({
                    ...prevState,
                    generalView: false,
                    profileView: false,
                    awsView: false,
                    azureView: true,
                    renderView: false
                }))
                break;

        }

    }


    return {
        currentSession,
        currentViewSelected,
        closeSession,
        sidebarNavigationHandler
    }

}

export default useSidebarNavigationViews;