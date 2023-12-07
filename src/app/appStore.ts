import { configureStore } from "@reduxjs/toolkit";
import { selectedMovieReducer } from "../store/selectedMovie/selectedMovieStore";
import { movieReducer } from "../store/movie/movieStore";
import { authReducer } from "../store/auth/authStore";

export const store = configureStore({
  reducer: {
    selectedMovie: selectedMovieReducer,
    movie: movieReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
