import "@testing-library/jest-dom/jest-globals";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { expect, test, describe } from "@jest/globals";
import React from "react";
import { App } from "./app";
import { Provider } from "react-redux";
import { store } from "./appStore";
import { MemoryRouter } from "react-router-dom";

describe("app", () => {
  test("app render", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    const app = screen.getByTestId(/app/i);
    expect(app).toBeInTheDocument();
    expect(app).toHaveClass("app");
  });

  test("unloggined navigation buttons test", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    const signUpNavigateButton = screen.getByTestId(/signUpNavigateButton/i);
    expect(signUpNavigateButton).toBeInTheDocument();
    fireEvent.click(signUpNavigateButton);
    expect(screen.getByTestId(/registrationPage/i)).toBeInTheDocument();
    const signInNavigateButton = screen.getByTestId(/signInNavigateButton/i);
    expect(signInNavigateButton).toBeInTheDocument();
    fireEvent.click(signInNavigateButton);
    expect(screen.getByTestId(/authorizationPage/i)).toBeInTheDocument();
  });

  test("authorization", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    expect(screen.getByTestId(/authorizationPage/i)).toBeInTheDocument();
    const emailInput = screen.getByTestId(/emailInput/i);
    const passwordInput = screen.getByTestId(/passwordInput/i);
    const signInSubmitBtn = screen.getByTestId(/signInSubmitBtn/i);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(signInSubmitBtn).toBeInTheDocument();

    // вводим неверные данные
    fireEvent.input(emailInput, { target: { value: "ppp@pp.ru" } });
    fireEvent.input(passwordInput, { target: { value: "qwdertyuio" } });
    fireEvent.submit(signInSubmitBtn);
    expect(await screen.findByTestId(/serverError/i)).toBeInTheDocument();

    // вводим правильные данные
    fireEvent.input(emailInput, { target: { value: "ppp@ppp.ru" } });
    fireEvent.input(passwordInput, { target: { value: "qwertyuio" } });

    await waitFor(() => {
      expect(emailInput).toHaveDisplayValue("ppp@ppp.ru");
      expect(passwordInput).toHaveDisplayValue("qwertyuio");
    });
    fireEvent.submit(signInSubmitBtn);
    expect(await screen.findByTestId(/searchMoviePage/i)).toBeInTheDocument();
  });

  test("toggle searchMovie mode", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    const titleModeRadioButton = screen.getByTestId(/searchModeTitle/i);
    const genreModeRadioButton = screen.getByTestId(/searchModeGenre/i);
    expect(screen.getByTestId(/searchModeGenre/i)).not.toBeChecked();
    expect(screen.getByTestId(/searchModeTitle/i)).toBeChecked();
    fireEvent.click(genreModeRadioButton);
    expect(screen.getByTestId(/searchModeGenre/i)).toBeChecked();
    expect(screen.getByTestId(/searchModeTitle/i)).not.toBeChecked();
    fireEvent.click(titleModeRadioButton);
    expect(screen.getByTestId(/searchModeGenre/i)).not.toBeChecked();
    expect(screen.getByTestId(/searchModeTitle/i)).toBeChecked();
  });

  test("movie click", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    const movieCard = await screen.findByText(/aladdin/i);
    fireEvent.click(movieCard);
    expect(screen.getByTestId(/movieInfoPage/i)).toBeInTheDocument();
    const backToSearchButton = await screen.findByTestId(/backToSearchButton/i);
    fireEvent.click(backToSearchButton);
    expect(screen.getByTestId(/searchMoviePage/i)).toBeInTheDocument();
  });

  test("error page test", () => {
    render(
      <MemoryRouter initialEntries={["/aaaaaaa"]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    expect(screen.getByTestId(/notFoundPage/i)).toBeInTheDocument();
  });

  test("logout", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    const logoutButton = screen.getByText(/log out/i);
    expect(logoutButton).toBeInTheDocument();
    expect(screen.getByTestId(/searchMoviePage/i)).toBeInTheDocument();
    fireEvent.click(logoutButton);
    expect(screen.getByTestId(/authorizationPage/i)).toBeInTheDocument();
  });
});
