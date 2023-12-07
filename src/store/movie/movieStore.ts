import { MovieObject } from "../../components/movie/movie";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/appStore";
import { GetMoviesParams, readMovies } from "./readMovies";

export enum SearchMode {
  Title = "title",
  Genre = "genre",
}

export enum SortMode {
  Title = "title",
  ReleaseDate = "year",
}

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (params: GetMoviesParams) => {
    const res = await readMovies(params);
    return res.data;
  },
);

interface MovieState {
  moviesData: MovieObject[];
  loading: boolean;
  error?: string;
  searchString?: string;
  searchMode: SearchMode;
  sortMode: SortMode;
}

const initialState: MovieState = {
  moviesData: [],
  loading: false,
  searchMode: SearchMode.Title,
  sortMode: SortMode.Title,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    toggleSearchMode: (state) => {
      state.searchMode === SearchMode.Title
        ? (state.searchMode = SearchMode.Genre)
        : (state.searchMode = SearchMode.Title);
    },
    toggleSortMode: (state) => {
      state.sortMode === SortMode.Title
        ? (state.sortMode = SortMode.ReleaseDate)
        : (state.sortMode = SortMode.Title);
    },
    setSearchString: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.moviesData = action.payload;
    });
    builder.addCase(getMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const movieSelector = (state: RootState) => state.movie;

export const {
  actions: { toggleSearchMode, toggleSortMode, setSearchString },
  reducer: movieReducer,
} = movieSlice;
