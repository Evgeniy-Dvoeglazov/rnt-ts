import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/appStore";

interface SuccessRegisterState {
  value: boolean;
}

const initialState: SuccessRegisterState = {
  value: false,
};

export const successRegisterSlice = createSlice({
  name: "successRegister",
  initialState,
  reducers: {
    isSuccessRegister: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const successRegisterSelector = (state: RootState) =>
  state.successRegister.value;

export const {
  actions: { isSuccessRegister },
  reducer: successRegisterReducer,
} = successRegisterSlice;
