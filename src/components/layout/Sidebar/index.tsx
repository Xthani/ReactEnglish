import React from "react";

import { lessonsToOptions } from "utils";
import Select from "components/common/Select";
import { useSidebar } from "./useSidebar";

import "./styles.scss";

const Sidebar = () => {
  const { isLoad, lessons, handleChange, defaultValue, handleClear } =
    useSidebar();

  return (
    <div className="header">
      <Select
        value={defaultValue}
        onChange={handleChange}
        defaultOptionLabel="Выбрать урок"
        loading={isLoad}
        option={lessonsToOptions(lessons)}
      />
      <button>Добавить урок</button>
      <button onClick={handleClear}>Начать заново</button>
    </div>
  );
};

export default Sidebar;
