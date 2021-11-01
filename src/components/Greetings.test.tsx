import { render, screen, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
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
  describe("when the button is pressed", () => {
    it("should call the `onSendWaves` callback", () => {
      const onSendWavesMock = jest.fn();
      render(
        <Greetings 
          name="Test Name" 
          onSendWaves={onSendWavesMock} />
      );      
      fireEvent.click(screen.getByRole("button"));
      expect(onSendWavesMock).toHaveBeenCalledWith(
        "Waves sent to Test Name!");
    });
  });
});
