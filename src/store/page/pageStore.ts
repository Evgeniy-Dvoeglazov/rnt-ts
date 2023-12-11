import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/appStore";

export enum Page {
  Registration = "registration",
  Authorization = "authorization",
}

interface PageState {
  value: Page;
}

const initialState: PageState = {
  value: Page.Authorization,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    togglePage: (state) => {
      state.value === Page.Authorization
        ? (state.value = Page.Registration)
        : (state.value = Page.Authorization);
    },
  },
});

export const pageSelector = (state: RootState) => state.page.value;

export const {
  actions: { togglePage },
  reducer: pageReducer,
} = pageSlice;
