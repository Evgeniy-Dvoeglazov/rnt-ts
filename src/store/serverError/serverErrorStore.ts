import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/appStore";

interface ServerErrorState {
  value: string;
}

const initialState: ServerErrorState = {
  value: "",
};

export const serverErrorSlice = createSlice({
  name: "serverError",
  initialState,
  reducers: {
    setServerError: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const serverErrorSelector = (state: RootState) =>
  state.serverError.value;

export const {
  actions: { setServerError },
  reducer: serverErrorReducer,
} = serverErrorSlice;
