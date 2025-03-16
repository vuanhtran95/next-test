import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";

test("renders homepage", () => {
  render(<Home />);
  expect(
    screen.getAllByText("Save and see your changes instantly.")
  ).toHaveLength(1);
});
