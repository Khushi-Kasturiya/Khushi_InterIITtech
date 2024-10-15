// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Adjust if your backend URL is different

export const fetchLocations = async () => {
    const response = await axios.get(`${API_URL}/locations`);
    return response.data;
};

export const fetchItemsByGodown = async (godownId) => {
    const response = await axios.get(`${API_URL}/items/by-godown/${godownId}`);
    return response.data;
};

