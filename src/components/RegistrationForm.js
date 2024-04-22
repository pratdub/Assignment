import React, { useState } from 'react';
import axiosInstance from './api'; // Import the axiosInstance utility

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('register/', formData);
            console.log('Registration successful:', response.data);
        } catch (error) {
            console.error('Registration Error:', error);
        }
    };

    return (
        <div className="container mx-auto">
            <form className="max-w-md mx-auto p-6 bg-white rounded shadow-md" onSubmit={handleSubmit}>
                <h2 className="text-2xl mb-4">Register</h2>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    className="w-full mb-4 p-2 rounded border"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
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
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegistrationForm;

