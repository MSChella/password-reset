

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AxiosInstance from '../../api';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await AxiosInstance.post('/forget-password', { email });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-6">
                <h2>Forget Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    {message && <p className="mt-3">{message}</p>}
                </form>
                <p className="mt-3">Remembered your password? <Link to="/">Login</Link></p>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
