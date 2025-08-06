  const axios = require('axios').default;
  const url ='https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
  
  const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ${Config.API_BEARER_TOKEN}'
  }

export default function getNowPlayingList (){

}