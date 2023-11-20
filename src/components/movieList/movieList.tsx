import './movieList.css';
import { Movie, MovieProps, MovieType } from "../movie/movie";

type Movies = {
  id: number;
  title: string;
  genre: string;
  year: number;
  image: string;
}[];

interface MovieListProps {
  onDoubleClick: (arg: MovieType) => void;
  movies: Movies;
}

export default function MovieList(props: MovieListProps) {
  return (
    <ul className='movieList'>
      {
        props.movies.map((movie: MovieProps) => {
          return (
            <Movie
              {...movie}
              key={movie.id}
              onDoubleClick={props.onDoubleClick}
              movie={movie}
            />
          )
        })
      }
    </ul>
  )
}
