import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MovieObject } from "../../components/movie/movie";
import { RootState } from "../../app/appStore";

interface SelectedMovieState {
  value: MovieObject | null;
}

const initialState: SelectedMovieState = {
  value: null,
};

export const selectedMovieSlice = createSlice({
  name: "selectedMovie",
  initialState,
  reducers: {
    setSelectedMovie: (state, action: PayloadAction<MovieObject>) => {
      state.value = action.payload;
    },
    removeSelectedMovie: (state) => {
      state.value = null;
    },
  },
});

export const selectedMovieSelector = (state: RootState) =>
  state.selectedMovie.value;

export const {
  actions: { setSelectedMovie, removeSelectedMovie },
  reducer: selectedMovieReducer,
} = selectedMovieSlice;
