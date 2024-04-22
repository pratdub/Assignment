import React, { useState } from 'react';
import axiosInstance from './api'; // Import the axiosInstance utility

const LoginForm = () => {
    const [formData, setFormData] = useState({
        usernameOrEmail: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('login/', formData);
            const { token } = response.data;
            localStorage.setItem('token', token); // Store token in localStorage
            console.log('Login successful. Token:', token);
            // Redirect or perform other actions after successful login
        } catch (error) {
            console.error('Login Error:', error);
        }
    };

    return (
        <div className="container mx-auto">
            <form className="max-w-md mx-auto p-6 bg-white rounded shadow-md" onSubmit={handleSubmit}>
                <h2 className="text-2xl mb-4">Login</h2>
                <input
                        type="text"
                        name="usernameOrEmail"
                        value={formData.usernameOrEmail}
                        onChange={handleChange}
                        placeholder="Username or Email"
                        className="w-full mb-4 p-2 rounded border"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="w-full mb-4 p-2 rounded border"
                        required
                    />
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                        Login
                    </button>
            </form>
        </div>
    );
};

export default LoginForm;







