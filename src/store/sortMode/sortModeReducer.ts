import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/appStore';

export enum SortMode {
  Title = 'title',
  ReleaseDate = 'year'
}

export interface SortModeState {
  sortMode: SortMode;
}

const initialState: SortModeState = {
  sortMode: SortMode.Title
};

export const sortModeSlice = createSlice({
  name: 'sortMode',
  initialState,
  reducers: {
    toggleSortMode: (state) => {
      state.sortMode === SortMode.Title
        ? state.sortMode = SortMode.ReleaseDate
        : state.sortMode = SortMode.Title
    }
  }
});

export const sortModeSelector = (state: RootState) => state.sortMode.sortMode;

export const { toggleSortMode } = sortModeSlice.actions;
export default sortModeSlice.reducer;
