import './movieList.css';
import { Movie, MovieObject } from "../movie/movie";

interface MovieListProps {
  doubleMovieClick: (movie: MovieObject) => void;
  movies: MovieObject[];
}

export default function MovieList(props: MovieListProps) {
  return (
    <ul className='movieList'>
      {
        props.movies.map((movie) => {
          return (
            <Movie
              key={movie.id}
              doubleMovieClick={props.doubleMovieClick}
              movie={movie}
            />
          )
        })
      }
    </ul>
  )
}
