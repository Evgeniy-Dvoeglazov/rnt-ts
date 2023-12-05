import { configureStore } from '@reduxjs/toolkit'
import sortModeReducer from '../store/sortMode/sortModeReducer';
import selectedMovieReducer from '../store/selectedMovie/selectedMovieReducer';
import searchStringReducer from '../store/searchString/searchStringReducer';
import searchModeReducer from '../store/searchMode/searchModeReducer';
import movieReducer from '../store/movie/movieReducer';

export const store = configureStore({
  reducer: {
    searchMode: searchModeReducer,
    searchString: searchStringReducer,
    selectedMovie: selectedMovieReducer,
    movie: movieReducer,
    sortMode: sortModeReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
