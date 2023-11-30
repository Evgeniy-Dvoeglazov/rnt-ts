import { legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import { searchModeReducer } from '../store/searchMode/searchModeReducer';
import { searchStringReducer } from '../store/searchString/searchStringReducer';
import { selectedMovieReducer } from '../store/selectedMovie/selectedMovieReducer';
import { movieReducer } from '../store/movie/movieReducer';
import { sortModeReducer } from '../store/sortMode/sortModeReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  searchMode: searchModeReducer,
  searchString: searchStringReducer,
  selectedMovie: selectedMovieReducer,
  movie: movieReducer,
  sortMode: sortModeReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
