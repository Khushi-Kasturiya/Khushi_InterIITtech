// src/api.js
import axios from 'axios';

const API_URL = 'https://hammerhead-app-6ugyo.ondigitalocean.app'; // Adjust if your backend URL is different

export const fetchLocations = async () => {
    const response = await axios.get(`${API_URL}/locations`);
    return response.data;
};

export const fetchItemsByGodown = async (godownId) => {
    const response = await axios.get(`${API_URL}/items/by-godown/${godownId}`);
    return response.data;
};

