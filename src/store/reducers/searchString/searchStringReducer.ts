import { SearchStringAction, SearchStringActionTypes, SearchStringState } from './types';

const initialState: SearchStringState = {
  searchString: '',
};

export const searchStringReducer = (state = initialState, action: SearchStringAction): SearchStringState => {
  switch (action.type) {
    case SearchStringActionTypes.SET_SEARCH_STRING:
      return {
        searchString: action.payload
      };
    default:
      return state;
  }
};
