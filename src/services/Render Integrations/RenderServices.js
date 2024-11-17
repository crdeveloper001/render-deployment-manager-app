/* eslint-disable no-unused-vars */
import { RENDER_SERVICES, API_BASE } from '../../utils/endpoints'
import axios from 'axios'

export const RetrieveDeployments = async () => {
    try {
        const response = await axios.get(`${API_BASE}${RENDER_SERVICES.services.getAppDeployed}`);
        return response.data
    } catch (err) {
        console.error("Error fetching services:", err); // Log error details

    }
}