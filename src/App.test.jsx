import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "./App";

test("renders Vite + React text", () => {
  render(<App />);
  expect(screen.getByText(/vite \+ react/i)).toBeInTheDocument();
});
