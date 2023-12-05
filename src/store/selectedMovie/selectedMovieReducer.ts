import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MovieObject } from "../../components/movie/movie";
import { RootState } from '../../app/appStore';

interface SelectedMovieState {
  selectedMovie: MovieObject | null;
}

const initialState: SelectedMovieState = {
  selectedMovie: null,
};

export const selectedMovieSlice = createSlice({
  name: 'selectedMovie',
  initialState,
  reducers: {
    setSelectedMovie: (state, action: PayloadAction<MovieObject>) => {
      state.selectedMovie = action.payload
    },
    removeSelectedMovie: (state) => {
      state.selectedMovie = null
    }
  }
});

export const selectedMovieSelector = (state: RootState) => state.selectedMovie.selectedMovie;

export const { setSelectedMovie, removeSelectedMovie } = selectedMovieSlice.actions;
export default selectedMovieSlice.reducer;

