import axios from "axios";

export function getMovies() {
    return axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=9bb8ab3b561dcc59e7be803a0dc80f05&language=en-US&page=1')
}
