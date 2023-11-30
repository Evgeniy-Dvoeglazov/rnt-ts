import { createSelector } from 'reselect';
import { RootState } from '../../app/appStore';

export const movieSelector = createSelector(
  (state: RootState) => state.movie,
  (movie) => movie
);
