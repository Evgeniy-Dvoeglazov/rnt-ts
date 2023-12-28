import axios from "axios";
import { serverUrl } from "../../utils/constants/url";

export type GetMovieInfoParams = {
  id: string;
};

export function readMovieInfo(params: GetMovieInfoParams) {
  return axios.get(`${serverUrl}/movies`, { params });
}
