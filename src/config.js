// src/config.js
// Configuration file for API endpoints

const config = {
    // For Create React App, use REACT_APP_ prefix
    // For Vite, use VITE_ prefix
    API_URL: process.env.REACT_APP_API_URL || process.env.VITE_API_URL || 'http://localhost:5000'
};

export default config;

// Usage example:
// import config from './config';
//
// fetch(`${config.API_URL}/api/users`)
//   .then(res => res.json())
//   .then(data => console.log(data));