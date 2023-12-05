import "./movieInfo.css";
import { MovieObject } from "../movie/movie";

interface SelectedMovieProps {
  selectedMovie: MovieObject;
}

export default function MovieInfo({ selectedMovie }: SelectedMovieProps) {
  return (
    <div className="movieInfo">
      <img
        className="movieInfo__image"
        src={selectedMovie.image}
        alt="movie-image"
      />
      <div className="movieInfo__text">
        <h2 className="movieInfo__title">{selectedMovie.title}</h2>
        <p className="movieInfo__genre">{selectedMovie.genre}</p>
        <div className="movieInfo__moreData">
          <p className="movieInfo__year">{selectedMovie.year}</p>
          <p className="movieInfo__duration">{selectedMovie.duration} min</p>
        </div>
        <p className="movieInfo__description">{selectedMovie.description}</p>
      </div>
    </div>
  );
}
