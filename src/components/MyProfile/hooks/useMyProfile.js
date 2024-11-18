import { useState } from "react"

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