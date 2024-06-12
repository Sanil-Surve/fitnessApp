import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'http://192.168.43.144:8080', 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});


export default api;
