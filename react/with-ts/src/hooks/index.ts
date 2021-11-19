import { FormValue, HandleChange } from "components/types";
import { useCallback, useState } from "react";

export const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue);

  const toggle = (): void => {
    setValue(!value);
  };

  return [value, toggle];
};

export function useControl<T extends FormValue = string>(initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const handleChange: HandleChange = (e) => {
    console.log("target type : ", e.currentTarget.type);
    const v =
      e.currentTarget.type === "checkbox"
        ? e.currentTarget.checked
        : e.currentTarget.value;
    //@ts-ignore
    setValue(v);
  };

  const onChange = useCallback(handleChange, []);

  return { value, onChange };
}
