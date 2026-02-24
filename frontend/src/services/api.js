import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// API functions - to be implemented
export const getResources = () => {
  return api.get('/resources');
};

export const uploadResource = (formData) => {
  return api.post('/resources', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export default api;