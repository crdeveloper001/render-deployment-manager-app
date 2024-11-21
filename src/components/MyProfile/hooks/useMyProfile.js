/* eslint-disable no-unused-vars */
import { useState,useEffect,useContext,createContext } from "react"

const useMyProfile = () => {

   

    const [currentSession, setCurrentSession] = useState({
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
    useEffect(() => {
        // Fetch payload from session storage
        const sessionData = sessionStorage.getItem('userInformation');
        if (sessionData) {
            try {
                // Parse the JSON string if it's stored as such
                const parsedData = JSON.parse(sessionData);
    
                // Update the state with the parsed data
                setCurrentSession(prevState => ({
                    ...prevState,
                    ...parsedData, // Spread parsed data into the state
                    accountRenderDetails: {
                        ...prevState.accountRenderDetails,
                        ...(parsedData.accountRenderDetails || {}),
                    },
                }));
            } catch (error) {
                console.error('Failed to parse session data', error);
            }
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentSession((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleNestedInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentSession((prev) => ({
            ...prev,
            accountRenderDetails: {
                ...prev.accountRenderDetails,
                [name]: value,
            },
        }));
    };

    return {
        currentSession,
        handleInputChange,
        handleNestedInputChange
    }

}

export default useMyProfile