import axios from 'axios';

export async function getTopRatedMovies() {
  return await axios.get('https://api.themoviedb.org/3/movie/top_rated', {
    params: {
      api_key: process.env.REACT_APP_TMBD_APIKEY,
      language: 'en-US',
      page: 1,
    },
  });
}

export async function searchMovie(query: string) {
  return await axios.get('https://api.themoviedb.org/3/search/movie', {
    params: {
      query,
      api_key: process.env.REACT_APP_TMBD_APIKEY,
      language: 'en-US',
      page: 1,
    },
  });
}
