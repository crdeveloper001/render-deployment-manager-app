/* eslint-disable no-undef */
import axios from 'axios';

// Load environment variables from .env
const API_BASE = import.meta.env.VITE_API_BASE;
const ACCOUNTS_AUTH_NEW_AUTHENTICATION = import.meta.env.VITE_ACCOUNTS_AUTH_NEW_AUTHENTICATION;

export const PostAuthentication = async (credentials) => {
    try {
        const response = await axios({
            url: `${API_BASE}${ACCOUNTS_AUTH_NEW_AUTHENTICATION}`,
            method: 'POST',
            data: {
                email: credentials.email,
                password: credentials.password
            },
            headers: {
                "Content-Type": "Application/json"
            }
        });

        return response;
    } catch (error) {
        console.error("Error in PostAuthentication:", error);
        throw error; // Rethrow the error to handle it further if needed
    }
};
