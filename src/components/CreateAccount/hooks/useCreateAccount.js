/* eslint-disable no-unused-vars */


import { useState } from 'react';
import { PostNewAccount } from '../../../services/Accounts/AccountServices';

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
    const [statusResponse, setStatusResponse] = useState(false)
    const [openAlert, setOpen] = useState(true);

    const closeAlertWindow = () => {
        setStatusResponse(false)

    }

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
        e.preventDefault();

        const requiredFields = [
            "accountName",
            "accountLastname",
            "accountEmail",
            "accountAliasName",
            "accountPassword",
            "accountRoleType",
        ];

        const emptyFields = requiredFields.filter((field) => !accountDetails[field]);
        if (emptyFields.length > 0) {
            alert(`Please fill in the following fields: ${emptyFields.join(", ")}`);
            return; // Stop execution if any required field is empty
        }

        const request = PostNewAccount(accountDetails);
        request.then((results) => {
            console.log(results.data);

            switch (results.data.creationAccountStatus) {
                case "201 created":

                    setStatusResponse(true);

                    break;
                default:
                    setStatusResponse(false);
            }
        })


    };


    return {
        accountDetails,
        errorsInputs,
        statusResponse,
        openAlert,
        closeAlertWindow,
        fillDataAccount,
        handleSubmit
    };
};

export default useCreateAccountForm;
