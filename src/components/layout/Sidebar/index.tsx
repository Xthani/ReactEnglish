import React from "react";

import { lessonsToOptions } from "utils";
import Select from "components/common/Select";
import { useSidebar } from "./useSidebar";

import "./styles.scss";

const Sidebar = () => {
  const { isLoad, lessons } = useSidebar();

  return (
    <div className="header">
      <Select
        onChange={(selectOption) => console.log(selectOption)}
        defaultOptionLabel="Выбрать урок"
        loading={isLoad}
        option={lessonsToOptions(lessons)}
      />
      <button>Добавить урок</button>
    </div>
  );
};

export default Sidebar;
