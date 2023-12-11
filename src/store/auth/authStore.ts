import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/appStore";

interface AuthState {
  value: boolean;
}

const initialState: AuthState = {
  value: false,
};

export const authSlice = createSlice({
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
} = authSlice;
