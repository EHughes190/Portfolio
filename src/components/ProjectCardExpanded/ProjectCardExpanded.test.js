import React from "react";
import { render } from "@testing-library/react";
import ProjectCardExpanded from "./ProjectCardExpanded";

describe("ProjectCardExpanded tests", () => {
  it("should render", () => {
    expect(render(<ProjectCardExpanded />)).toBeTruthy();
  });
});
