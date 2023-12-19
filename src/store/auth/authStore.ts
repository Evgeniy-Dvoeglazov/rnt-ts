import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/appStore";
import { authorize } from "./authorize";
import { register } from "./register";
import { authToken } from "../../utils/constants/constants";

export interface AuthValues {
  [key: string]: string;
}

export const authorization = createAsyncThunk(
  "auth/authorization",
  async (values: AuthValues) => {
    const res = await authorize(values);
    return res.data;
  },
);

export const registration = createAsyncThunk(
  "auth/registration",
  async (values: AuthValues) => {
    const res = await register(values);
    return res.data;
  },
);

interface AuthState {
  loggedIn: boolean;
  loading: boolean;
  serverError?: string;
  successRegister?: boolean;
  token: string | null;
}

const initialState: AuthState = {
  loggedIn: false,
  loading: false,
  token: sessionStorage.getItem(authToken),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.loggedIn = true;
    },
    logout: (state) => {
      state.loggedIn = false;
      sessionStorage.removeItem(authToken);
      state.token = null;
    },
    removeServerError: (state) => {
      state.serverError = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authorization.pending, (state) => {
      state.loading = true;
      state.serverError = undefined;
    });
    builder.addCase(authorization.fulfilled, (state, action) => {
      state.loading = false;
      state.loggedIn = true;
      sessionStorage.setItem(authToken, action.payload.accessToken);
    });
    builder.addCase(authorization.rejected, (state, action) => {
      state.loading = false;
      state.serverError =
        action.error.message === "Request failed with status code 400"
          ? "Invalid email or password"
          : action.error.message;
    });
    builder.addCase(registration.pending, (state) => {
      state.loading = true;
      state.serverError = undefined;
      state.successRegister = undefined;
    });
    builder.addCase(registration.fulfilled, (state) => {
      state.loading = false;
      state.successRegister = true;
    });
    builder.addCase(registration.rejected, (state, action) => {
      state.loading = false;
      state.serverError =
        action.error.message === "Request failed with status code 400"
          ? "User with this email already exists"
          : action.error.message;
    });
  },
});

export const authSelector = (state: RootState) => state.auth;

export const {
  actions: { login, logout, removeServerError },
  reducer: authReducer,
} = authSlice;
