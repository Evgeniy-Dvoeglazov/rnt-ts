import './movie.css';
import { useDispatch } from 'react-redux';
import { SelectedMovieTypes } from '../../types/selectedMovie';
import { useCallback } from 'react';

type Genre = 'drama' | 'horror' | 'adventure' | 'fantasy' | 'thriller';

export type MovieObject = {
  id: number;
  title: string;
  genre: Genre;
  year: number;
  image: string;
  duration: number;
  description: string;
}

interface MovieProps {
  movie: MovieObject;
}

export function Movie({ movie }: MovieProps) {
  const dispatch = useDispatch();

  const openMovieInfo = useCallback((movie: MovieObject) => {
    window.scrollTo(0, 0);
    dispatch({type: SelectedMovieTypes.SET_SELECTED_MOVIE, payload: movie });
  }, [dispatch]);

  return (
    <li className='movie' onDoubleClick={() => {
      openMovieInfo(movie)
    }}>
      <img className='movie__image' src={movie.image} alt={movie.title} />
      <div className='movie__info'>
        <h2 className='movie__title'>{movie.title}</h2>
        <p className='movie__year'>{movie.year}</p>
      </div>
      <p className='movie__genre'>{movie.genre}</p>
    </li>
  )
}
