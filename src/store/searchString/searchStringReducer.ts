import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/appStore';

interface SearchStringState {
  searchString: string;
}

const initialState: SearchStringState = {
  searchString: '',
};

export const searchStringSlice = createSlice({
  name: 'searchString',
  initialState,
  reducers: {
    setSearchString: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload
    }
  }
});

export const searchStringSelector = (state: RootState) => state.searchString.searchString;

export const { setSearchString } = searchStringSlice.actions;
export default searchStringSlice.reducer;
