export enum SearchStringActionTypes {
  SET_SEARCH_STRING = 'SET_SEARCH_STRING'
}

export interface SearchStringState {
  searchString: string;
}

interface SetSearchStringAction {
  type: SearchStringActionTypes.SET_SEARCH_STRING;
  payload: string;
}

export type SearchStringAction = SetSearchStringAction
