import React from "react";

export type UseCheckboxValue = boolean;
export type UseCheckboxResult = [boolean, () => void];

const useCheckbox = (
  defaultValue: UseCheckboxValue = false
): UseCheckboxResult => {
  const [checked, setChecked] = React.useState(defaultValue);
  const toggle = () => setChecked((prev) => !prev);
  return [checked, toggle];
};

export default useCheckbox;
