import React from "react";
import { render } from "@testing-library/react";
import ProjectCard from "./ProjectCard";

describe("ProjectCard tests", () => {
  it("should render", () => {
    expect(render(<ProjectCard />)).toBeTruthy();
  });
});
