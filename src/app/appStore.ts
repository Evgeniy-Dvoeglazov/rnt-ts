import { legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import { searchModeReducer } from '../store/reducers/searchMode/searchModeReducer';
import { searchStringReducer } from '../store/reducers/searchString/searchStringReducer';
import { selectedMovieReducer } from '../store/reducers/selectedMovie/selectedMovieReducer';
import { movieReducer } from '../store/reducers/movie/movieReducer';
import { sortModeReducer } from '../store/reducers/sortMode/sortModeReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  searchMode: searchModeReducer,
  searchString: searchStringReducer,
  selectedMovie: selectedMovieReducer,
  movie: movieReducer,
  sortMode: sortModeReducer
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const store = createStore(rootReducer, applyMiddleware(thunk));

