import React from 'react';
import Modal from "./Modal";
import useModal from './use_modal';

const App = () => {
  const {isShowing, toggle} = useModal();
  return (
    <div className="App">
      <button className="button-default" onClick={toggle}>Show Modal</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  );
};

export default App;