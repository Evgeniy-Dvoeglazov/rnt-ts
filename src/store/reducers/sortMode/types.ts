export enum SortMode {
  Title = 'title',
  ReleaseDate = 'year'
}

export interface SortModeState {
  sortMode: SortMode;
}

export enum SortModeActionTypes {
  TOGGLE_SORT_MODE = 'TOGGLE_SORT_MODE'
}

interface ToggleSortModeAction {
  type: SortModeActionTypes.TOGGLE_SORT_MODE;
}

export type SortModeAction = ToggleSortModeAction
