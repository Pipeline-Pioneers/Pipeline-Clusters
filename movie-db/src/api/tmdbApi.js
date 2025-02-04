import axiosClient from "./axiosClient";

// Define categories for API requests
export const category = {
    movie: 'movie',
    tv: 'tv'
};

// Define types of movie requests
export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
};

// Define types of TV show requests
export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
};

// Define the tmdbApi object with methods for API requests
const tmdbApi = {
    // Get a list of movies based on type
    getMoviesList: (type, params) => {
        const url = 'movie/' + type;
        return axiosClient.get(url, { params });
    },

    // Get a list of TV shows based on type
    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type];
        return axiosClient.get(url, params);
    },

    // Get videos for a specific movie or TV show
    getVideos: (cate, id) => {
        const url = category[cate] + '/' + id + '/videos';
        return axiosClient.get(url, { params: {} });
    },

    // Search for movies or TV shows
    search: (cate, params) => {
        const url = 'search/' + category[cate];
        return axiosClient.get(url, params);
    },

    // Get details of a specific movie or TV show
    detail: (cate, id, params) => {
        const url = category[cate] + '/' + id;
        return axiosClient.get(url, params);
    },

    // Get credits for a specific movie or TV show
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, {params: {}});
    },

    // Get similar movies or TV shows
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, {params: {}});
    }
}

export default tmdbApi;