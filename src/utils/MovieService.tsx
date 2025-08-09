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
