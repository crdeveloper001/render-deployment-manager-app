export const API_BASE = "http://localhost:4500/"
export const PRODUCTION_BASE = ""
//endpoint for api of <Spinner animation="border" role="status" /> 
export const RENDER_SERVICES = {
    services: {
        getAppDeployed: "api/v1/AppServices"
    },
    deployments: {
        getDeployments: ""
    }
}

export const ACCOUNTS = {
    Auth: {
        newAuthentication: "api/v1/Accounts/Authentication",
        createNewAccount: "api/v1/Accounts/NewAccount"
    },

    AccountsManager: {
        updateAccount: "",
        deleteAccount: ""
    }
}
