import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MovieObject } from "../../components/movie/movie";
import { RootState } from "../../app/appStore";
import { GetMovieInfoParams, readMovieInfo } from "./readMovieInfo";

interface MovieInfoState {
  movie: MovieObject | null;
  loading: boolean;
  error?: string;
}

const initialState: MovieInfoState = {
  movie: null,
  loading: false,
};

export const getMovieInfo = createAsyncThunk(
  "movies/getMovieInfo",
  async (params: GetMovieInfoParams) => {
    const res = await readMovieInfo(params);
    return res.data[0];
  },
);

export const movieInfoSlice = createSlice({
  name: "movieInfo",
  initialState,
  reducers: {
    removeMovieInfo: (state) => {
      state.movie = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovieInfo.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(getMovieInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.movie = action.payload;
    });
    builder.addCase(getMovieInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const movieInfoSelector = (state: RootState) => state.movieInfo;

export const {
  actions: { removeMovieInfo },
  reducer: movieInfoReducer,
} = movieInfoSlice;
