import './movieList.css';
import { Movie, MovieObject } from "../movie/movie";

interface MovieListProps {
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
              movie={movie}
            />
          )
        })
      }
    </ul>
  )
}
