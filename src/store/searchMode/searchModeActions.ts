import { SearchModeActionTypes } from "./searchModeReducer";

interface ToggleSearchModeAction {
  type: SearchModeActionTypes.TOGGLE_SEARCH_MODE;
}

export type SearchModeAction = ToggleSearchModeAction
