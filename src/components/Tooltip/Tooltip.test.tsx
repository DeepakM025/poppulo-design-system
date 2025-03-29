import { render, screen } from "@testing-library/react";
import Tooltip from "./Tooltip";
import "@testing-library/jest-dom";

describe("Tooltip Component", () => {
  test("renders child content correctly", () => {
    render(
      <Tooltip text="Tooltip message">
        <button>Hover me</button>
      </Tooltip>
    );

    expect(screen.getByText("Hover me")).toBeInTheDocument();
  });

  test("applies correct position", () => {
    const { container } = render(
      <Tooltip text="Tooltip message" position="top">
        <button>Hover me</button>
      </Tooltip>
    );

    expect(container.querySelector("[data-position='top']")).toBeInTheDocument();
  });
});
