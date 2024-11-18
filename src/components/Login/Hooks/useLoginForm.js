import { useState } from 'react';
import { PostAuthentication } from '../../../services/Authentication/AuthenticationServices'
import { useNavigate } from 'react-router';
const useLoginForm = () => {
    const appNav = useNavigate()
    const [values, setValues] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: '', password: '' });
    const [authResponse, setAuthResponse] = useState({})

    const validate = () => {
        let tempErrors = {};
        if (!values.email) {
            tempErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            tempErrors.email = 'Email is not valid';
        }

        if (!values.password) {
            tempErrors.password = 'Password is required';
        } else if (values.password.length < 6) {
            tempErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            //alert('Login Successful');
            const request = PostAuthentication(values)

            request.then((results) => {
                setAuthResponse(results)

                switch (results?.data?.message) {
                    case "Account Authorized":
                        sessionStorage.setItem("userInformation", JSON.stringify(results.data.payload))
                        sessionStorage.setItem("authorized", results.data.token)
                        appNav("/Dashboard")
                        break;
                }


                console.log(results);

            }).catch(error => {

                switch (error.response.data.message) {
                    case "Authentication failed: Account not found":
                        setAuthResponse(error.response)
                        break;
                }


            })
        }
    };

    return {
        values,
        errors,
        authResponse,
        handleChange,
        handleSubmit,
    };
};

export default useLoginForm;
