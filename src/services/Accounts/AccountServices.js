import axios from 'axios'
import { ACCOUNTS, API_BASE } from '../../utils/endpoints'

export const PostNewAccount = async (information) => {

    const response = axios({
        url: API_BASE + ACCOUNTS.Auth.createNewAccount,
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
    })

    return response

}

