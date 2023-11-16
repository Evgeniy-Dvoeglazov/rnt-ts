import './movieList.css';
import { moviesData } from "../../data/moviesData";
import { Movie, MovieProps } from "../movie/movie";

export default function MovieList() {
  return (
    <ul className='movieList'>
      {
        moviesData.map((movie: MovieProps) => {
          return (
            <Movie
              {...movie}
              key={movie.id}
            />
          )
        })
      }
    </ul>
  )
}
