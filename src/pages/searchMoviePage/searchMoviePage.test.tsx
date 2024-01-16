import "@testing-library/jest-dom/jest-globals";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { expect, test, describe } from "@jest/globals";
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import SearchMoviePage from "./searchMoviePage";
import { store } from "../../app/appStore";
import { MovieObject } from "../../components/movie/movie";

jest.mock("axios");

describe("get movies", () => {
  let responseMovies: { data: MovieObject[] };
  let responseMovie: { data: MovieObject[] };

  beforeEach(() => {
    responseMovies = {
      data: [
        {
          id: 1,
          title: "the shawshank redemption",
          genre: "drama",
          year: 1994,
          image:
            "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
          duration: 142,
          description:
            "When an innocent male banker is sent to prison accused of murdering his wife, he does everything that he can over the years to break free and escape from prison. While on the inside, he develops a friendship with a fellow inmate that could last for years.",
        },
        {
          id: 2,
          title: "the green mile",
          genre: "drama",
          year: 1999,
          image:
            "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_.jpg",
          duration: 189,
          description:
            "A tale set on death row in a Southern jail, where gentle giant John possesses the mysterious power to heal people's ailments. When the lead guard, Paul, recognizes John's gift, he tries to help stave off the condemned man's execution.",
        },
        {
          id: 3,
          title: "the thing",
          genre: "horror",
          year: 1982,
          image:
            "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
          duration: 109,
          description:
            "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
        },
      ],
    };
    responseMovie = {
      data: [
        {
          id: 3,
          title: "the thing",
          genre: "horror",
          year: 1982,
          image:
            "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
          duration: 109,
          description:
            "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
        },
      ],
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("get movies", async () => {
    (axios.get as jest.Mock).mockReturnValue(responseMovies);
    render(
      <MemoryRouter>
        <Provider store={store}>
          <SearchMoviePage />
        </Provider>
      </MemoryRouter>,
    );
    const movies = await screen.findAllByTestId("movie");
    expect(movies.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);

    const searchMovieInput = screen.getByTestId(/searchMovieInput/i);
    const searchMovieButton = screen.getByTestId(/searchMovieButton/i);
    fireEvent.input(searchMovieInput, { target: { value: "the thing" } });
    await waitFor(() => {
      expect(searchMovieInput).toHaveDisplayValue("the thing");
    });
    (axios.get as jest.Mock).mockReturnValue(responseMovie);
    fireEvent.click(searchMovieButton);
    await waitFor(() => {
      expect(screen.getAllByTestId("movie").length).toBe(1);
    });
    expect(screen.getByText(/the thing/i)).toBeInTheDocument();
  });
});
