import "./movie.css";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { setSelectedMovie } from "../../store/selectedMovie/selectedMovieStore";
import { useNavigate } from "react-router-dom";
import { Pages } from "../../app/app";
import { AppDispatch } from "../../app/appStore";

type Genre = "drama" | "horror" | "adventure" | "fantasy" | "thriller";

export type MovieObject = {
  id: number;
  title: string;
  genre: Genre;
  year: number;
  image: string;
  duration: number;
  description: string;
};

interface MovieProps {
  movie: MovieObject;
}

export function Movie({ movie }: MovieProps) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const openMovieInfo = useCallback(
    (movie: MovieObject) => {
      dispatch(setSelectedMovie(movie));
      navigate(Pages.MovieInfo, { replace: true });
    },
    [dispatch, navigate],
  );

  return (
    <li
      className="movie"
      onClick={() => {
        openMovieInfo(movie);
      }}
    >
      <img className="movie__image" src={movie.image} alt={movie.title} />
      <div className="movie__info">
        <h2 className="movie__title">{movie.title}</h2>
        <p className="movie__year">{movie.year}</p>
      </div>
      <p className="movie__genre">{movie.genre}</p>
    </li>
  );
}
