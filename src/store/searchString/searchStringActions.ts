import { SearchStringActionTypes } from "./searchStringReducer";

interface SetSearchStringAction {
  type: SearchStringActionTypes.SET_SEARCH_STRING;
  payload: string;
}

export type SearchStringAction = SetSearchStringAction
