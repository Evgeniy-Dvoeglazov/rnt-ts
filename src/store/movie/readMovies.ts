import axios from "axios";
import { SearchMode } from "./movieStore";
import { serverUrl } from "../../utils/constants/url";

export type GetMoviesParams = {
  _sort: string;
} & {
  [key in SearchMode]?: string;
};

export function readMovies(params: GetMoviesParams) {
  return axios.get(`${serverUrl}/movies`, { params });
}
