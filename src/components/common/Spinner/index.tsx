import React, { FC } from "react";

import "./styles.scss";

interface Props {
  disableBackground?: boolean;
}

const Spinner: FC<Props> = ({ disableBackground = false }) => {
  return (
    <div
      className={`spinner-container${disableBackground ? " no-background" : ""}`}
    >
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
