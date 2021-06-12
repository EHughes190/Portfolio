import React from "react";
import { render } from "@testing-library/react";
import Envelope from "./Envelope";

describe("Envelope tests", () => {
  it("should render", () => {
    expect(render(<Envelope />)).toBeTruthy();
  });
});
