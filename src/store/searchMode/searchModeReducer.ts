import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/appStore';

export enum SearchMode {
  Title = 'title',
  Genre = 'genre'
}

interface SearchModeState {
  searchMode: SearchMode;
}

const initialState: SearchModeState = {
  searchMode: SearchMode.Title
};

export const searchModeSlice = createSlice({
  name: 'searchMode',
  initialState,
  reducers: {
    toggleSearchMode: (state) => {
      state.searchMode === SearchMode.Title
        ? state.searchMode = SearchMode.Genre
        : state.searchMode = SearchMode.Title
    }
  }
});

export const searchModeSelector = (state: RootState) => state.searchMode.searchMode;

export const { toggleSearchMode } = searchModeSlice.actions;
export default searchModeSlice.reducer;
