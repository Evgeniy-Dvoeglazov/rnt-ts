import axios from "axios";
import { serverUrl } from "../../utils/constants/url";

export type GetSelectedMovieParams = {
  id: number;
};

export function readSelectedMovie(params: GetSelectedMovieParams) {
  return axios.get(`${serverUrl}/movies`, { params });
}
