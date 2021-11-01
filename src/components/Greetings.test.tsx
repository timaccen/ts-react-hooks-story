import { render, screen } from "@testing-library/react";
import { Greetings } from "./Greetings";

describe("Greetings component", () => {
  describe("when rendered with a `name` prop", () => {
    it("should paste it into the greetings text", () => {
      render(<Greetings name="Test Name" />);
      expect(screen.getByText(/Hello Test Name!/)).toBeInTheDocument();
    });
  });
  describe("when rendered with `onSendWaves` prop", () => {
    it("should render the sending waves button", () => {
      render(<Greetings name="Test Name" onSendWaves={() => {}} />);

      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });
});
