import "./movieInfoPage.css";
import { MovieObject } from "../../components/movie/movie";
import Button from "../../components/button/button";
import { useDispatch } from "react-redux";
import { removeSelectedMovie } from "../../store/selectedMovie/selectedMovieStore";

export interface SelectedMovieProps {
  selectedMovie: MovieObject;
}

export default function MovieInfoPage({ selectedMovie }: SelectedMovieProps) {
  const dispatch = useDispatch();
  return (
    <section className="movieInfoPage">
      <div className="movieInfoPage__navigation">
        <Button
          onClick={() => {
            dispatch(removeSelectedMovie());
          }}
          variant="withoutBackground"
          title="Back to search"
          type="button"
        />
      </div>
      <div className="movieInfoPage__movieInfo">
        <img
          className="movieInfoPage__image"
          src={selectedMovie.image}
          alt="movie-image"
        />
        <div className="movieInfoPage__text">
          <h2 className="movieInfoPage__title">{selectedMovie.title}</h2>
          <p className="movieInfoPage__genre">{selectedMovie.genre}</p>
          <div className="movieInfoPage__moreData">
            <p className="movieInfoPage__year">{selectedMovie.year}</p>
            <p className="movieInfoPage__duration">
              {selectedMovie.duration} min
            </p>
          </div>
          <p className="movieInfoPage__description">
            {selectedMovie.description}
          </p>
        </div>
      </div>
    </section>
  );
}
