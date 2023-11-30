import { SearchStringAction } from './searchStringActions';

export enum SearchStringActionTypes {
  SET_SEARCH_STRING = 'SET_SEARCH_STRING'
}

interface SearchStringState {
  searchString: string;
}

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
