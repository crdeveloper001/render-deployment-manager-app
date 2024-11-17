import { useEffect, useState } from "react";
import { RetrieveDeployments } from '../../../services/Render Integrations/RenderServices';

const useRenderServicesStatus = () => {
    const [currentServices, setCurrentServices] = useState([]); // Initialize as an empty array
    const [loading, setLoading] = useState(true); // Set loading initially to true since data is being fetched
    const [error, setError] = useState(null); // Error state

    // Function to retrieve services
    const RetrieveServices = async () => {
        setLoading(true); // Ensure loading is true before starting request
        setError(null); // Reset any previous error messages

        try {
            const results = await RetrieveDeployments(); // Await the service call
            setCurrentServices(results.response); // Set services data on successful response
            console.log("Fetched services:", results.response); // Log the fetched services
        } catch (error) {
            console.error("Error fetching services:", error); // Log error details
            setError(error.message || "Error fetching services."); // Set error message if any
        } finally {
            setLoading(false); // Set loading to false after request completes
        }
    };

    // Initial execution of the service retrieval
    useEffect(() => {
        RetrieveServices();
    }, []); // Empty dependency array ensures this only runs on mount

    // Return values from hook
    return {
        currentServices,
        loading, // Keep loading for internal hook logic
        error, // Include error state in the return
        RetrieveServices // Allow external calls to refresh services
    };
};

export default useRenderServicesStatus;
