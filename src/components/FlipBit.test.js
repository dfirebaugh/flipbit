import React from "react";
import { render } from "@testing-library/react";
import FlipBit from "./FlipBit";

test("renders FlipBit header", () => {
  const { getByText } = render(<FlipBit />);
  const headerElement = getByText(/FlipBit/i);
  expect(headerElement).toBeInTheDocument();
});
