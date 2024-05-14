// api.js

import axios from 'axios';

// Function to set token in local storage
export const setToken = (token) => {
    localStorage.setItem('token', token);
};

// Function to get token from local storage
export const getToken = () => {
    return localStorage.getItem('token');
};

// Function to remove token from local storage
export const removeToken = () => {
    localStorage.removeItem('token');
};

// Axios instance with base URL and default headers
const AxiosInstance = axios.create({
    baseURL: 'https://password-reset-api-lvc7.onrender.com./api', // Your backend API base URL
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor to attach token to requests
AxiosInstance.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default AxiosInstance;
