import './movie.css';

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

export interface MovieProps {
  doubleMovieClick: (movie: MovieObject) => void;
  movie: MovieObject;
}

export function Movie({ movie, doubleMovieClick }: MovieProps) {
  return (
    <li className='movie' onDoubleClick={() => {
      doubleMovieClick(movie)
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
