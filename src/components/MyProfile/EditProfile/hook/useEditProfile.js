/* eslint-disable no-unused-vars */
import { useState } from "react";

const useEditProfile = () =>{
    const [updateProfile, setUpdateProfile] = useState({
        _id: '',
        accountName: '',
        accountLastname: '',
        accountEmail: '',
        accountAliasName: '',
        accountPhone: null,
        accountPassword: '',
        accountRoleType: '',
        accountRenderDetails: {
            renderAccountEmail: null,
            renderAccountId: null,
            renderAccountName: null,
            renderRolType: null,
        },
        accountAppsDeployed: null,
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdateProfile((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    return {
        updateProfile,
        handleInputChange
    }

}