import axios from "axios";

export interface AuthorizeValues {
  [key: string]: string;
}

export function authorize(values: AuthorizeValues) {
  return axios.post(`http://localhost:3004/signin`, values);
}
