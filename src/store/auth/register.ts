import axios from "axios";
import { serverUrl } from "../../utils/constants/url";
import { AuthValues } from "./authStore";

export function register(values: AuthValues) {
  return axios.post(`${serverUrl}/users`, values);
}
