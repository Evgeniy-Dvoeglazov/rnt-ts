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
              title={movie.title}
              image={movie.image}
              genre={movie.genre}
              year={movie.year}
            />
          )
        })
      }
    </ul>
  )
}
