import "./movieInfoPage.css";
import Button from "../../components/button/button";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedMovie,
  selectedMovieSelector,
} from "../../store/selectedMovie/selectedMovieStore";
import { useNavigate } from "react-router-dom";
import { Pages } from "../../app/app";
import { AppDispatch } from "../../app/appStore";

export default function MovieInfoPage() {
  const dispatch = useDispatch<AppDispatch>();
  const selectedMovie = useSelector(selectedMovieSelector);
  const navigate = useNavigate();

  return (
    selectedMovie && (
      <section className="movieInfoPage">
        <div className="movieInfoPage__navigation">
          <Button
            onClick={() => {
              dispatch(removeSelectedMovie());
              navigate(Pages.SearchMovie, { replace: true });
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
    )
  );
}
