import { useState } from 'react';

const useLoginForm = () => {
    const [values, setValues] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: '', password: '' });

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
            alert('Login Successful');
            // Perform login action here
        }
    };

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
    };
};

export default useLoginForm;
