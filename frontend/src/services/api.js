import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Resources API
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

export const deleteResource = (id) => {
  return api.delete(`/resources/${id}`);
};

// Auth API
export const register = (userData) => {
  return api.post('/auth/register', userData);
};

export const login = (credentials) => {
  return api.post('/auth/login', credentials);
};

export default api;