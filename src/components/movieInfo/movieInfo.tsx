import './movieInfo.css';
import { MovieType } from '../movie/movie';

interface MovieInfoProps {
  selectedMovie: MovieType;
}

export default function MovieInfo(props: MovieInfoProps) {
  return (
    <div className='movieInfo'>
      <img className='movieInfo__image' src={props.selectedMovie.image} alt='movie-image' />
      <div className='movieInfo__text'>
        <h2 className='movieInfo__title'>{props.selectedMovie.title}</h2>
        <p className='movieInfo__genre'>{props.selectedMovie.genre}</p>
        <div className='movieInfo__moreData'>
          <p className='movieInfo__year'>{props.selectedMovie.year}</p>
          <p className='movieInfo__duration'>{props.selectedMovie.duration} min</p>
        </div>
        <p className='movieInfo__description'>{props.selectedMovie.description}</p>
      </div>
    </div>
  )
}
