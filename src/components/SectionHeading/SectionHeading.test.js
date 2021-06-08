import React from "react";
import { render } from "@testing-library/react";
import SectionHeading from "./SectionHeading";

describe("SectionHeading tests", () => {
  it("should render", () => {
    expect(render(<SectionHeading />)).toBeTruthy();
  });
});
