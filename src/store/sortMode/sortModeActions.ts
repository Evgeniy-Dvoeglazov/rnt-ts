import { SortModeActionTypes } from "./sortModeReducer";

interface ToggleSortModeAction {
  type: SortModeActionTypes.TOGGLE_SORT_MODE;
}

export type SortModeAction = ToggleSortModeAction
