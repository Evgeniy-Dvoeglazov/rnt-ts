import { createSelector } from 'reselect';
import { RootState } from '../../app/appStore';

export const searchModeSelector = createSelector(
  (state: RootState) => state.searchMode,
  (searchMode) => searchMode.searchMode
);
