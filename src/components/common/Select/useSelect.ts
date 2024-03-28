import React, { useEffect, useState } from "react";
import { ISelectOption } from "./types";

export const useSelect = ({
  option,
  defaultOptionLabel,
  onChange,
  value,
}: {
  option: ISelectOption[];
  defaultOptionLabel: string;
  onChange?: (selectedOption: ISelectOption) => void;
  value?: string;
}) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedValue(value);

    const selectedOption = option.find((opt) => opt.value === value);
    if (selectedOption && onChange) {
      onChange(selectedOption);
    }
  };

  const handleClearSelection = () => {
    setSelectedValue("");
    if (onChange) {
      onChange({ value: "", label: defaultOptionLabel });
    }
  };
  return {
    selectedValue,
    handleChange,
    handleClearSelection,
  };
};
