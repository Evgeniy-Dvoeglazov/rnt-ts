import "./movie.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Pages } from "../../app/app";

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
  const navigate = useNavigate();

  const openMovieInfo = useCallback(
    (movie: MovieObject) => {
      navigate(Pages.MovieInfo.replace(":movieId", String(movie.id)), {
        replace: true,
      });
    },
    [navigate],
  );

  return (
    <li
      className="movie"
      onClick={() => {
        openMovieInfo(movie);
      }}
      data-testid="movie"
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
