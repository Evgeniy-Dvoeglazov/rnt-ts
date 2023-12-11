import { configureStore } from "@reduxjs/toolkit";
import { selectedMovieReducer } from "../store/selectedMovie/selectedMovieStore";
import { movieReducer } from "../store/movie/movieStore";
import { authReducer } from "../store/auth/authStore";
import { pageReducer } from "../store/page/pageStore";
import { loadingReducer } from "../store/loading/loadingStore";
import { serverErrorReducer } from "../store/serverError/serverErrorStore";
import { successRegisterReducer } from "../store/successRegister/successRegisterStore";

export const store = configureStore({
  reducer: {
    selectedMovie: selectedMovieReducer,
    movie: movieReducer,
    auth: authReducer,
    page: pageReducer,
    loading: loadingReducer,
    serverError: serverErrorReducer,
    successRegister: successRegisterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
