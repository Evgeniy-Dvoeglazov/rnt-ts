import { createSelector } from 'reselect';
import { RootState } from '../../app/appStore';

export const searchStringSelector = createSelector(
  (state: RootState) => state.searchString,
  (searchString) => searchString.searchString
);
