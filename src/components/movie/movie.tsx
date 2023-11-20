import { useCallback } from 'react';
import './movie.css';

type Genre = 'drama' | 'horror' | 'adventure' | 'fantasy' | 'thriller';

export type MovieType = {
  id: number;
  title: string;
  genre: Genre;
  year: number;
  image: string;
  duration: number;
  description: string;
}

export interface MovieProps extends MovieType {
  onDoubleClick: (arg: MovieType) => void;
  movie: MovieType;
}

export function Movie(props: MovieProps) {
  return (
    <li className='movie' onDoubleClick={() => {
      props.onDoubleClick(props.movie)}}>
      <img className='movie__image' src={props.image} alt={props.title} />
      <div className='movie__info'>
        <h2 className='movie__title'>{props.title}</h2>
        <p className='movie__year'>{props.year}</p>
      </div>
      <p className='movie__genre'>{props.genre}</p>
    </li>
  )
}
