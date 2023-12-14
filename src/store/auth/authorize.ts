import axios from "axios";
import { serverUrl } from "../../utils/constants/url";
import { AuthValues } from "./authStore";

export function authorize(values: AuthValues) {
  return axios.post(`${serverUrl}/signin`, values);
}
