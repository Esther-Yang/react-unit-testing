import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
describe("Greeting component", () => {
  test("renders Hello Wolrd as a text", () => {
    // Arrange
    render(<Greeting />);

    //   Act
    //  nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });
});
