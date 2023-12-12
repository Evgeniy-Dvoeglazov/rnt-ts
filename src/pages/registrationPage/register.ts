import axios from "axios";

export interface RegisterValues {
  [key: string]: string;
}

export function register(values: RegisterValues) {
  return axios.post(`http://localhost:3004/users`, values);
}
