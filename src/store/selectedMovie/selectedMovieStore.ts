import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MovieObject } from "../../components/movie/movie";
import { RootState } from "../../app/appStore";
import { GetSelectedMovieParams, readSelectedMovie } from "./readSelectedMovie";

interface SelectedMovieState {
  movie: MovieObject | null;
  loading: boolean;
  error?: string;
}

const initialState: SelectedMovieState = {
  movie: null,
  loading: false,
};

export const getSelectedMovie = createAsyncThunk(
  "movies/getSelecrtedMovie",
  async (params: GetSelectedMovieParams) => {
    const res = await readSelectedMovie(params);
    return res.data[0];
  },
);

export const selectedMovieSlice = createSlice({
  name: "selectedMovie",
  initialState,
  reducers: {
    removeSelectedMovie: (state) => {
      state.movie = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSelectedMovie.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(getSelectedMovie.fulfilled, (state, action) => {
      state.loading = false;
      state.movie = action.payload;
    });
    builder.addCase(getSelectedMovie.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const selectedMovieSelector = (state: RootState) => state.selectedMovie;

export const {
  actions: { removeSelectedMovie },
  reducer: selectedMovieReducer,
} = selectedMovieSlice;
