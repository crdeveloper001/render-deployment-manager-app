import { useEffect, useState } from "react";
import axios from 'axios';
import { API_BASE, RENDER_SERVICES } from "../../../utils/endpoints";

const useRenderServicesStatus = () => {
    const [currentServices, setCurrentServices] = useState([]); // Initialize as an empty array
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error state

    const RetrieveServices = async () => {
        setLoading(true); // Set loading to true
        setError(null); // Reset any previous errors
        try {
            const response = await axios.get(`${API_BASE}${RENDER_SERVICES}`);
            setCurrentServices(response.data.response); // Set currentServices to the 'response' array
            console.log("Fetched services:", response.data.response); // Log the actual data returned
        } catch (err) {
            console.error("Error fetching services:", err); // Log error details
            setError(err.message || "Error fetching services."); // Set a user-friendly error message
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    const getCurrentServices = () => {
        console.log(currentServices);
    };

    // Initial execution
    useEffect(() => {
        RetrieveServices();
    }, []);

    // Return values from hook
    return {
        currentServices,
        loading, // Include loading state in the return
        error, // Include error state in the return
        RetrieveServices,
        getCurrentServices,
    };
};

export default useRenderServicesStatus;
