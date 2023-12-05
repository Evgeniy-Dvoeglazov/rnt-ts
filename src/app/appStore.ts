import { configureStore } from "@reduxjs/toolkit";
import { selectedMovieReducer } from "../store/selectedMovie/selectedMovieStore";
import { movieReducer } from "../store/movie/movieStore";

export const store = configureStore({
  reducer: {
    selectedMovie: selectedMovieReducer,
    movie: movieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
