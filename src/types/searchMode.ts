export enum SearchMode {
  Title = 'title',
  Genre = 'genre'
}

export interface SearchModeState {
  searchMode: SearchMode;
}

export enum SearchModeTypes {
  SET_SEARCH_MODE = 'SET_SEARCH_MODE'
}

interface SetSearchModeAction {
  type: SearchModeTypes.SET_SEARCH_MODE;
}

export type SearchModeAction = SetSearchModeAction
