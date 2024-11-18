/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from 'axios';

// Load environment variables from .env
const API_BASE = import.meta.env.VITE_API_BASE;
const RENDER_SERVICES_GET_APP_DEPLOYED = import.meta.env.VITE_RENDER_SERVICES_GET_APP_DEPLOYED;

export const RetrieveDeployments = async () => {
    try {
        const response = await axios.get(`${API_BASE}${RENDER_SERVICES_GET_APP_DEPLOYED}`);
        return response.data;
    } catch (err) {
        console.error("Error fetching services:", err); // Log error details
        throw err; // Rethrow the error for further handling if needed
    }
};
