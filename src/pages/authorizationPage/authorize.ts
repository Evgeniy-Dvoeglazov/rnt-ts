import axios from "axios";
import { serverUrl } from "../../utils/constants/url";

export interface AuthorizeValues {
  [key: string]: string;
}

export function authorize(values: AuthorizeValues) {
  return axios.post(`${serverUrl}/signin`, values);
}
