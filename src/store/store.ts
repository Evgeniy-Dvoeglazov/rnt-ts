import { legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import { searchModeReducer } from './reducers/searchModeReducer';
import { searchStringReducer } from './reducers/searchStringReducer';
import { selectedMovieReducer } from './reducers/selectedMovieReducer';
import { movieReducer } from './reducers/movieReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  searchMode: searchModeReducer,
  searchString: searchStringReducer,
  selectedMovie: selectedMovieReducer,
  movie: movieReducer
});

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk));
