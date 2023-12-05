import { SortModeAction } from './sortModeActions';

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

const initialState: SortModeState = {
  sortMode: SortMode.Title
};

export const sortModeReducer = (state = initialState, action: SortModeAction): SortModeState => {
  switch (action.type) {
    case SortModeActionTypes.TOGGLE_SORT_MODE:
      return {
        sortMode: state.sortMode === SortMode.Title
          ? SortMode.ReleaseDate
          : SortMode.Title
      };
    default:
      return state;
  }
};
