const apiConfig =
{
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'c9da5ba688646ee104cc29c6bd0834a7',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;