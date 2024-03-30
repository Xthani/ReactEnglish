import React, { FC } from "react";

import Spinner from "components/common/Spinner";

import "./styles.scss";

interface Props {
  loading?: boolean;
  children: React.ReactNode;
}

const Main: FC<Props> = ({ loading, children }) => (
  <div className="main-container">{loading ? <Spinner /> : children}</div>
);

export default Main;
