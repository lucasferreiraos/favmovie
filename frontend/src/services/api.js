import axios from 'axios';

// const URL = `http://www.omdbapi.com/?t=${nameMovie}&apikey=f9a84b4d`;
// const API_KEY = '&apikey=f9a84b4d';

// function api(movieName) {
//     const apiInstance = axios.create({
//         baseURL: `http://www.omdbapi.com/?t=${movieName}&apikey=f9a84b4d`
//     });
//     return apiInstance;
// }

const api = axios.create({
    baseURL: 'http://api.tvmaze.com/search/shows?q='
});

export default api;