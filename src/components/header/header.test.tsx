import "@testing-library/jest-dom/jest-globals";
import { render, screen } from "@testing-library/react";
import { test, describe } from "@jest/globals";
import React from "react";
import { Provider } from "react-redux";
import Header from "./header";
import { store } from "../../app/appStore";

describe("header", () => {
  test("snapshot", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
    const header = screen.getByTestId(/header/i);
    expect(header).toMatchSnapshot();
  });
});
