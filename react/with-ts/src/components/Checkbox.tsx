import { HandleChange } from "components/types";
import { FC, memo } from "react";

type CheckBoxProps = {
  value: boolean;
  onChange: HandleChange;
  id?: string;
  name?: string;
};

export const Checkbox: FC<CheckBoxProps> = memo(({ value, ...rest }) => {
  console.log("render checkbox");
  return <input type="checkbox" {...rest} checked={value} />;
});
