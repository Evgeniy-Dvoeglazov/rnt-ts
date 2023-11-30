export enum SearchMode {
  Title = 'title',
  Genre = 'genre'
}

export interface SearchModeState {
  searchMode: SearchMode;
}

export enum SearchModeActionTypes {
  TOGGLE_SEARCH_MODE = 'TOGGLE_SEARCH_MODE'
}

interface ToggleSearchModeAction {
  type: SearchModeActionTypes.TOGGLE_SEARCH_MODE;
}

export type SearchModeAction = ToggleSearchModeAction
