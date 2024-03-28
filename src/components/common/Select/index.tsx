import React, { FC } from "react";

import { ISelectOption } from "./types";
import { useSelect } from "./useSelect";

import "./styles.scss";

interface Props {
  option: ISelectOption[];
  loading?: boolean;
  defaultOptionLabel: string;
  onChange?: (selectedOption: ISelectOption) => void;
  value?: string;
}

const Select: FC<Props> = ({
  option,
  loading,
  defaultOptionLabel,
  onChange,
  value = "",
}) => {
  const { selectedValue, handleChange, handleClearSelection } = useSelect({
    option,
    defaultOptionLabel,
    onChange,
    value,
  });
  return (
    <div
      className={`select-wrapper ${loading ? "loading" : ""} ${selectedValue ? "selected" : ""}`}
    >
      <select
        className="select-custom"
        onChange={handleChange}
        value={selectedValue}
        disabled={loading}
      >
        <option value="" disabled>
          {defaultOptionLabel}
        </option>
        {option.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {selectedValue && !loading && (
        <div className="select-clear" onClick={handleClearSelection}>
          ✕
        </div>
      )}
    </div>
  );
};

export default Select;
