import { SortMode, SortModeAction, SortModeActionTypes, SortModeState } from './types';

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
