import { useState, useMemo } from "react";

const useToggle = () => {
  const [state, setState] = useState("off");
  // Note: you can also use boolean values instead of 'on' & 'off' string.
  console.count();

  const handlers = useMemo(
    () => ({
      toggle: () => {
        setState((res) => (res === "on" ? "off" : "on"));
      }
    }),
    []
  );

  return [state, handlers] as const;
};

export default useToggle;
