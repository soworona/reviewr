import { Movie } from '../types/Movies';
import { AxiosInstance } from '../utils/Axios';

export async function getMovieList (urlPath: string) {
  try {
    const response = await AxiosInstance.get(urlPath);
    const movieList:Movie[] = response.data.results.map((m: any) => ({
      id: m.id,
      title: m.title,
      overview: m.overview,
      poster_path: m.poster_path,
      backdrop_path: m.backdrop_path,
      release_date: m.release_date,
      vote_average: m.vote_average
    }));
    return movieList;
  } catch (error) {
    throw error;
  }
};

export async function addOrRemoveWishList (movie_id: number, isInWatchList:boolean) {
  try{
    const response =  await AxiosInstance.post(`account/22105497/watchlist`,{
    media_type: 'movie',
    media_id: movie_id,
    watchlist: isInWatchList});
    
    // console.log("wathc list response", response.data);
  } catch (error) {
    throw error;
  }
}

export async function getWishlist() {
    try {
    const response = await AxiosInstance.get(`account/22105497/watchlist/movies`);
    const movieList:number[] = response.data.results.map((m: any) => ({
      id: m.id
    }));
    return movieList;
  } catch (error) {
    throw error;
  }
};


