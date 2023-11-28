import { SearchStringAction, SearchStringTypes, SearchStringState } from '../../types/searchString';

const initialState: SearchStringState = {
  searchString: '',
};

export const searchStringReducer = (state = initialState, action: SearchStringAction): SearchStringState => {
  switch (action.type) {
    case SearchStringTypes.SET_SEARCH_STRING:
      return {
        searchString: action.payload
      };
    default:
      return state;
  }
};
