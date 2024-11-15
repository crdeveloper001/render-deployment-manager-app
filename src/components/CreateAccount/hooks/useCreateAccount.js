/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react';

const useCreateAccountForm = () => {
    const [accountDetails, setAccountDetails] = useState({
        accountName: '',
        accountLastname: '',
        accountEmail: '',
        accountAliasName: '',
        accountPhone: 0,
        accountPassword: '',
        accountRoleType: '',
        accountRenderDetails: {
            renderAccountEmail: '',
            renderAccountId: '',
            renderAccountName: '',
            renderRolType: '',
        },
        accountAppsDeployed: 0,
    });

    const [errorsInputs, setErrorsInputs] = useState({
        accountName: false,
        accountLastname: false,
        accountEmail: false,
        accountAliasName: false,
        accountPhone: false,
        accountPassword: false,
        accountRoleType: false,
    })

    const fillDataAccount = (e) => {
        const { name, value } = e.target;


        switch (value) {
            case '':
                setErrorsInputs((prevState) => ({
                    ...prevState, [name]: true
                }))
                break;
            default:
                setErrorsInputs((prevState) => ({
                    ...prevState, [name]: false
                }))
                setAccountDetails((prevState) => ({
                    ...prevState, [name]: value
                }))
                break;
        }




    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(JSON.stringify(accountDetails))
    }


    return {
        accountDetails,
        errorsInputs,
        fillDataAccount,
        handleSubmit
    };
};

export default useCreateAccountForm;
