import { useState, useEffect } from "react";

export function useUppercase(initialValue: string) {
  const transformed = initialValue.toUpperCase()
  const [value, setValue] = useState(transformed);
  // same as this?
  // const [value, setValue] = useState(<typeof transformed | null>(null));

  const update = (newValue: string): void => {
    setValue(newValue.toUpperCase());
  };

  useEffect(() => {
    setValue(initialValue.toUpperCase());
  }, [initialValue]);

  return { value, update };
}