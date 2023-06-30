import Home from "../pages/index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Test Home Page", () => {
  it("should render Home Page", () => {
    render(<Home />);
    expect(screen.getByText("Hello NextJS POC")).toBeInTheDocument();
  });
});
