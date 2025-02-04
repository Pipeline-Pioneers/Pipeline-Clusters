import axios from 'axios';
import queryString from 'query-string';

import apiConfig from './apiConfig';

// Create an axios instance with custom configuration
const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl, // Base URL for all requests
    headers: {
        'Content-Type': 'application/json', // Set default content type to JSON
    },
    // Serialize query parameters and include the API key
    paramsSerializer: params => queryString.stringify({ ...params, api_key: apiConfig.apiKey })
});

// Request interceptor to modify requests before they are sent
axiosClient.interceptors.request.use(async (config) => config);

// Response interceptor to handle responses and errors
axiosClient.interceptors.response.use(
    (response) => {
        // Return the response data if available
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        // Throw error to be handled by the calling function
        throw error;
    }
);

export default axiosClient;