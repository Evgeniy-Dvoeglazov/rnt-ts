import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/appStore";

interface LoadingState {
  value: boolean;
}

const initialState: LoadingState = {
  value: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const loadingSelector = (state: RootState) => state.loading.value;

export const {
  actions: { setLoading },
  reducer: loadingReducer,
} = loadingSlice;
