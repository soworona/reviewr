import axios from "axios";

  export const AxiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/',
    headers: {
      accept: 'application/json',
    },
  });

  AxiosInstance.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjA0YTFkOTE1MzA2YWUzMjBjNWZhMzU2MGU3MDU5OCIsIm5iZiI6MTc1MTAxOTgzNS4xNjk5OTk4LCJzdWIiOiI2ODVlNzEzYmQ5YWMzYmViNGIzMDM0ZjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fNEnU11VQjUYm2LtS2nLtom5oQFwCLinjwJUWKPTM0U`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);