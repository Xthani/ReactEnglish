import React from "react";

import { useAppDispatch, useAppSelector } from "hooks";
import { clearError } from "features/error/errorSlice";

import Modal from "components/common/Modal";
import MainPanel from "components/layout/MainPanel";

const App = () => {
  const dispatch = useAppDispatch();
  const errorMessage = useAppSelector((state) => state.error.message);
  return (
    <>
      <Modal show={!!errorMessage} onClose={() => dispatch(clearError())}>
        {errorMessage}
      </Modal>
      <div className="app-container">
        {/*Sidebar <br />*/}
        <MainPanel />
      </div>
    </>
  );
};

export default App;
