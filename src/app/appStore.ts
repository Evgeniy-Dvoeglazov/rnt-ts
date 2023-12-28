import { configureStore } from "@reduxjs/toolkit";
import { movieInfoReducer } from "../store/movieInfo/movieInfoStore";
import { movieReducer } from "../store/movie/movieStore";
import { authReducer } from "../store/auth/authStore";

export const store = configureStore({
  reducer: {
    movieInfo: movieInfoReducer,
    movie: movieReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
