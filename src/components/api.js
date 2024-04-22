import axios from 'axios';

const token = localStorage.getItem('token');
const headers = { Authorization: `JWT ${token}` };

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/', // Replace with your backend API base URL
    headers,
});

export default axiosInstance;
