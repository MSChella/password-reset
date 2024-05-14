import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from '../../Config/axios-config';
// import '../RegistrationForm/style.css'

const SignUp = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();



        try {

            const response = await axios.post('api/auth/signup', {
                email,
                password,



            });


            console.log('User registration successful:', response.data);


            localStorage.setItem('token', response.data.token)
            navigate('/');
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };
    const handleAadharChange = (e) => {
        const aadharValue = e.target.value.replace(/\D/g, '');
        if (aadharValue.length <= 10) {
            setAadharNo(aadharValue);
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "800px" }}>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center mb-4">Sign Up</h3>
                            <form class="form-group" onSubmit={handleSubmit}>
                                <div mb-3>

                                    <label>
                                        Email Address:
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </label>
                                    <label>
                                        Password:
                                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </label>




                                    <button class="btn btn-primary" type="submit">Submit For Registration</button></div>
                            </form>
                        </div></div></div></div></div>
    );
};

export default SignUp;

