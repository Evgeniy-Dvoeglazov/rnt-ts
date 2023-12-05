import { MovieObject } from '../../components/movie/movie';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/appStore';
import axios from 'axios';
import { SearchMode } from '../searchMode/searchModeReducer';

export type GetMoviesParams = {
  _sort: string;
} & {
    [key in SearchMode]?: string;
  };

export const getMovies = createAsyncThunk(
  'movies/getMovies', async (params: GetMoviesParams) => {
    const res = await axios.get(`http://localhost:3004/movies`, { params });
    return res.data;
  }
)

interface MovieState {
  moviesData: MovieObject[];
  loading: boolean;
  error: string | undefined;
}

const initialState: MovieState = {
  moviesData: [],
  loading: false,
  error: '',
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getMovies.pending, (state) => {
      state.loading = true,
        state.error = ''
    })
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.loading = false,
        state.moviesData = action.payload,
        state.error = ''
    })
    builder.addCase(getMovies.rejected, (state, action) => {
      state.loading = false,
        state.error = action.error.message
    })
  }
});

export const movieSelector = (state: RootState) => state.movie;
export default movieSlice.reducer;
