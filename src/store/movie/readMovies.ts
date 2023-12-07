import axios from "axios";
import { SearchMode } from "./movieStore";

export type GetMoviesParams = {
  _sort: string;
} & {
  [key in SearchMode]?: string;
};

export function readMovies(params: GetMoviesParams) {
  return axios.get(`http://localhost:3004/movies`, { params });
}
