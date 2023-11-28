import { SearchMode, SearchModeAction, SearchModeTypes, SearchModeState } from '../../types/searchMode';

const initialState: SearchModeState = {
  searchMode: SearchMode.Title
};

export const searchModeReducer = (state = initialState, action: SearchModeAction): SearchModeState => {
  switch (action.type) {
    case SearchModeTypes.SET_SEARCH_MODE:
      return {
        searchMode: state.searchMode === SearchMode.Title
          ? SearchMode.Genre
          : SearchMode.Title
      };
    default:
      return state;
  }
};
