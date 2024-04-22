import React, { useEffect, useState } from 'react';
import axiosInstance from './api'; // Import the axiosInstance utility

const ProfileComponent = () => {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        fetchData(); // Fetch user profile data when the component mounts
    }, []);

    const fetchData = async () => {
        try {
            const response = await axiosInstance.get('user/profile/');
            setProfileData(response.data);
        } catch (error) {
            console.error('Fetch Error:', error);
        }
    };

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl mb-4">User Profile</h2>
            {profileData ? (
                <div>
                    <p>Username: {profileData.username}</p>
                    <p>Email: {profileData.email}</p>
                </div>
            ) : (
                <p>Loading profile data...</p>
            )}
        </div>
    );
};

export default ProfileComponent;
