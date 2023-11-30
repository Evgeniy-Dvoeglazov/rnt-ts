import { SearchMode, SearchModeAction, SearchModeActionTypes, SearchModeState } from './types';

const initialState: SearchModeState = {
  searchMode: SearchMode.Title
};

export const searchModeReducer = (state = initialState, action: SearchModeAction): SearchModeState => {
  switch (action.type) {
    case SearchModeActionTypes.TOGGLE_SEARCH_MODE:
      return {
        searchMode: state.searchMode === SearchMode.Title
          ? SearchMode.Genre
          : SearchMode.Title
      };
    default:
      return state;
  }
};
