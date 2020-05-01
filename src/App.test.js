import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

test("should have NeutralinoJs", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("caption")).toHaveTextContent("NeutralinoJs");
});
