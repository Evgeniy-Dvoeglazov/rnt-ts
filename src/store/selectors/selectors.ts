import { createSelector } from 'reselect';
import { RootState } from '../../app/appStore';

export const selectedMovieSelector = createSelector(
  (state: RootState) => state.selectedMovie,
  (selectedMovie) => selectedMovie.selectedMovie
);

export const searchModeSelector = createSelector(
  (state: RootState) => state.searchMode,
  (searchMode) => searchMode.searchMode
);

export const searchStringSelector = createSelector(
  (state: RootState) => state.searchString,
  (searchString) => searchString.searchString
);

export const movieSelector = createSelector(
  (state: RootState) => state.movie,
  (movie) => movie
);

export const sortModeSelector = createSelector(
  (state: RootState) => state.sortMode,
  (sortMode) => sortMode.sortMode
);
