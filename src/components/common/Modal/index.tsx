import React, { FC, ReactNode } from "react";

import "./styles.scss";

interface Props {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<Props> = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default Modal;
