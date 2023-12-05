import axios from "axios";
import { GetMoviesParams } from "./movieStore";

export function readMovies(params: GetMoviesParams) {
  return axios.get(`http://localhost:3004/movies`, { params });
}
