/* eslint-disable no-undef */
import axios from 'axios';

// Load environment variables from .env
const API_BASE = import.meta.env.VITE_API_BASE;
const ACCOUNTS_AUTH_CREATE_NEW_ACCOUNT = import.meta.env.VITE_ACCOUNTS_AUTH_CREATE_NEW_ACCOUNT;

export const PostNewAccount = async (information) => {
    try {
        const response = await axios({
            url: `${API_BASE}${ACCOUNTS_AUTH_CREATE_NEW_ACCOUNT}`,
            method: 'POST',
            data: {
                _id: "",
                accountName: information.accountName,
                accountLastname: information.accountLastname,
                accountEmail: information.accountEmail,
                accountAliasName: information.accountAliasName,
                accountPhone: information.accountPhone,
                accountPassword: information.accountPassword,
                accountRoleType: information.accountRoleType,
                accountRenderDetails: {
                    renderAccountEmail: "",
                    renderAccountId: "",
                    renderAccountName: "",
                    renderRolType: ""
                },
                accountAppsDeployed: 0
            },
            headers: {
                "Content-Type": "Application/json"
            }
        });

        return response;
    } catch (error) {
        console.error("Error in PostNewAccount:", error);
        throw error; // Rethrow error for further handling if needed
    }
};
