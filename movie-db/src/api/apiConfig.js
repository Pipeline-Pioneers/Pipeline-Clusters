// Configuration object for The Movie Database (TMDb) API
const apiConfig = {
    // Base URL for TMDb API
    baseUrl: 'https://api.themoviedb.org/3/',
    
    // API key for accessing TMDb API
    apiKey: 'c9da5ba688646ee104cc29c6bd0834a7',
    
    // Function to get the URL for the original image size
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    
    // Function to get the URL for the w500 image size
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

// Export the configuration object
export default apiConfig;