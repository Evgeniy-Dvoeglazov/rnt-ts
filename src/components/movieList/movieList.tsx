import './movieList.css';
import { moviesData } from "../../data/moviesData";
import Movie from "../movie/movie";

export default function MovieList() {
  return (
    <ul className='movieList'>
      {
        moviesData.map((movie) => {
          return (
            <Movie
              key={movie.id}
              {...movie}
            />
          )
        })
      }
    </ul>
  )
}
