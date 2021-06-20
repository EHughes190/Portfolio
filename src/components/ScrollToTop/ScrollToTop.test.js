import React from "react";
import { render } from "@testing-library/react";
import ScrollToTop from "./ScrollToTop";

describe("ScrollToTop tests", () => {
  it("should render", () => {
    expect(render(<ScrollToTop />)).toBeTruthy();
  });
});
