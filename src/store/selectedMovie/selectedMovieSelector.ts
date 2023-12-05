import { createSelector } from 'reselect';
import { RootState } from '../../app/appStore';

export const selectedMovieSelector = createSelector(
  (state: RootState) => state.selectedMovie,
  (selectedMovie) => selectedMovie.selectedMovie
);
