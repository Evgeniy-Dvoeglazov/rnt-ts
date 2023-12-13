import axios from "axios";
import { serverUrl } from "../../utils/constants/url";

export interface RegisterValues {
  [key: string]: string;
}

export function register(values: RegisterValues) {
  return axios.post(`${serverUrl}/users`, values);
}
