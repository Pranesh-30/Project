import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const getAllFeedback = () => axios.get(`${API_BASE_URL}/feedback`);

export const saveFeedback = (feedback) => axios.post(`${API_BASE_URL}/feedback`, feedback);

export const deleteFeedback = (id) => axios.delete(`${API_BASE_URL}/feedback/${id}`);
