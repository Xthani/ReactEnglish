import React from "react";

import { lessonsToOptions } from "utils";
import Select from "components/common/Select";
import { useSidebar } from "./useSidebar";
import { Logo } from "assets/icons/Logo";

import "./styles.scss";

const Sidebar = () => {
  const {
    isLoad,
    lessons,
    handleChange,
    defaultValue,
    handleClear,
    navigateToHome,
  } = useSidebar();

  return (
    <div className="header">
      <div onClick={navigateToHome} className="header-logo">
        <Logo />
        <h1>REACT LOGO</h1>
      </div>

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
