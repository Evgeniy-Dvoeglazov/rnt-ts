import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/appStore";

interface authState {
  value: boolean;
}

const initialState: authState = {
  value: false,
};

export const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.value = true;
    },
    logout: (state) => {
      state.value = false;
    },
  },
});

export const authSelector = (state: RootState) => state.auth.value;

export const {
  actions: { login, logout },
  reducer: authReducer,
} = loginSlice;
