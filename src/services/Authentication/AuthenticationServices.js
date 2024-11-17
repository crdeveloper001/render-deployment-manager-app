
import axios from 'axios'
import { ACCOUNTS, API_BASE } from '../../utils/endpoints'

export const PostAuthentication = async (credentials) => {

    const response = await axios({
        url: API_BASE + ACCOUNTS.Auth.newAuthentication,
        method: 'POST',
        data: {
            email: credentials.email,
            password: credentials.password
        },
        headers: {
            "Content-Type": "Application/json"
        }
    })

    return response

}

