import "./movieInfoPage.css";
import Button from "../../components/button/button";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovieInfo,
  movieInfoSelector,
  removeMovieInfo,
} from "../../store/movieInfo/movieInfoStore";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Pages } from "../../app/app";
import { AppDispatch } from "../../app/appStore";
import { useEffect } from "react";

export default function MovieInfoPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { movie, loading, error } = useSelector(movieInfoSelector);
  const navigate = useNavigate();
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    movieId &&
      dispatch(
        getMovieInfo({
          id: movieId,
        }),
      );
  }, [dispatch, movieId]);

  useEffect(() => {
    navigate(location.pathname.replace(":movieId", `${movieId}`), {
      replace: true,
    });
  }, [navigate, movieId, location.pathname]);

  return (
    <>
      <section className="movieInfoPage" data-testid="movieInfoPage">
        <div className="movieInfoPage__navigation">
          <Button
            onClick={() => {
              dispatch(removeMovieInfo());
              navigate(Pages.SearchMovie, { replace: true });
            }}
            variant="withoutBackground"
            title="Back to search"
            type="button"
            data-testid="backToSearchButton"
          />
        </div>
        {loading && <p className="movieInfoPage__infoText">Loading...</p>}
        {error && <p className="movieInfoPage__infoText">{error}</p>}
        {movie && (
          <div className="movieInfoPage__movieInfo">
            <img
              className="movieInfoPage__image"
              src={movie.image}
              alt="movie-image"
            />
            <div className="movieInfoPage__text">
              <h2 className="movieInfoPage__title">{movie.title}</h2>
              <p className="movieInfoPage__genre">{movie.genre}</p>
              <div className="movieInfoPage__moreData">
                <p className="movieInfoPage__year">{movie.year}</p>
                <p className="movieInfoPage__duration">{movie.duration} min</p>
              </div>
              <p className="movieInfoPage__description">{movie.description}</p>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
