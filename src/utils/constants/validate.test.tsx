import "@testing-library/jest-dom/jest-globals";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { test, describe } from "@jest/globals";
import React from "react";
import AuthorizationPage from "../../pages/authorizationPage/authorizationPage";
import { Provider } from "react-redux";
import { store } from "../../app/appStore";
import { MemoryRouter } from "react-router-dom";
import RegistrationPage from "../../pages/registrationPage/registrationPage";

describe("validate", () => {
  test("authorization validate", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <AuthorizationPage />
        </Provider>
      </MemoryRouter>,
    );
    const emailInput = screen.getByTestId(/emailInput/i);
    const passwordInput = screen.getByTestId(/passwordInput/i);
    const signInSubmitBtn = screen.getByTestId(/signInSubmitBtn/i);
    fireEvent.submit(signInSubmitBtn);
    await waitFor(() => {
      expect(screen.getAllByTestId(/validationError/i).length).toBe(2);
    });
    fireEvent.input(emailInput, { target: { value: "pppru" } });
    fireEvent.input(passwordInput, { target: { value: "qwde" } });
    await waitFor(() => {
      expect(screen.getAllByTestId(/validationError/i).length).toBe(2);
    });
    fireEvent.input(emailInput, { target: { value: "ppp@ddd.ru" } });
    fireEvent.input(passwordInput, { target: { value: "qwde" } });
    await waitFor(() => {
      expect(screen.getAllByTestId(/validationError/i).length).toBe(1);
    });
    fireEvent.input(emailInput, { target: { value: "pppu" } });
    fireEvent.input(passwordInput, { target: { value: "qwdertyuioo" } });
    await waitFor(() => {
      expect(screen.getAllByTestId(/validationError/i).length).toBe(2);
    });
    fireEvent.input(emailInput, { target: { value: "pppu@ddd.ru" } });
    fireEvent.input(passwordInput, { target: { value: "qwdertyuio" } });
    await waitFor(() => {
      expect(screen.queryAllByTestId(/validationError/i).length).toBeFalsy();
    });
  });

  test("registration validate", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <RegistrationPage />
        </Provider>
      </MemoryRouter>,
    );
    const emailInput = screen.getByTestId(/emailInput/i);
    const usernameInput = screen.getByTestId(/usernameInput/i);
    const passwordInput = screen.getByTestId(/passwordInput/i);
    const confirmPasswordInput = screen.getByTestId(/passwordConfirmInput/i);
    const signUpSubmitBtn = screen.getByTestId(/signUpSubmitBtn/i);
    fireEvent.submit(signUpSubmitBtn);
    await waitFor(() => {
      expect(screen.getAllByTestId(/validationError/i).length).toBe(4);
    });
    fireEvent.input(emailInput, { target: { value: "pppru" } });
    fireEvent.input(usernameInput, { target: { value: "pppru" } });
    fireEvent.input(passwordInput, { target: { value: "qwde" } });
    fireEvent.input(confirmPasswordInput, { target: { value: "qwertyuio" } });
    await waitFor(() => {
      expect(screen.getAllByTestId(/validationError/i).length).toBe(4);
    });
    fireEvent.input(emailInput, { target: { value: "pppru@sss.ru" } });
    fireEvent.input(usernameInput, { target: { value: "pppru" } });
    fireEvent.input(passwordInput, { target: { value: "qwertyuio" } });
    fireEvent.input(confirmPasswordInput, { target: { value: "qwertqqyuio" } });
    await waitFor(() => {
      expect(screen.getAllByTestId(/validationError/i).length).toBe(2);
    });
    fireEvent.input(emailInput, { target: { value: "pppru@sss.ru" } });
    fireEvent.input(usernameInput, { target: { value: "ANNA" } });
    fireEvent.input(passwordInput, { target: { value: "qwertyuio" } });
    fireEvent.input(confirmPasswordInput, { target: { value: "qwertyuio" } });
    await waitFor(() => {
      expect(screen.queryAllByTestId(/validationError/i).length).toBeFalsy();
    });
  });
});
