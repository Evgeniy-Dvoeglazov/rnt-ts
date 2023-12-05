import { createSelector } from 'reselect';
import { RootState } from '../../app/appStore';

export const sortModeSelector = createSelector(
  (state: RootState) => state.sortMode,
  (sortMode) => sortMode.sortMode
);
