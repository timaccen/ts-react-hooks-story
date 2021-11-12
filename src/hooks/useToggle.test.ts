import { act, renderHook } from "@testing-library/react-hooks";
import useToggle from "./useToggle";

describe("useToggle hook", () => {
  describe("when rendered", () => {
    it("returns current initial value, uppercased", () => {
      const { result } = renderHook(() => useToggle());
      expect(result.current).toEqual("off");
    });
  });

//   describe("when called the `update` method", () => {
//     it("changes the `value` and uppercases it", () => {
//       const { result } = renderHook(() => useUppercase("Test string"));
//       act(() => result.current.update("Updated"));
//       expect(result.current.value).toEqual("UPDATED");
//     });
//   });

//   describe("when re-rendered with another initial value", () => {
//     it("updates the value", () => {
//       const { result, rerender } = renderHook(
//         ({ text }) => useUppercase(text),
//         {
//           initialProps: { text: "Test String" },
//         }
//       );
//       rerender({ text: "Updated!" });
//       expect(result.current.value).toEqual("UPDATED!");
//     });
//   });
});
