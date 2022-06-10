import React from "react";
import "./App.css";
import useModal from "./modal/Usemodal";
import Modal from "./modal/modal";
import Hello from "./component/hello";

function App() {
  const { isShow: show, toggle: _toggleOpen } = useModal();

  return (
    <div className="App">
      <h1> all bout react modal </h1>
      <div>
        <button className="btn" onClick={_toggleOpen}>
          do show modal
        </button>
        <Modal
          isShow={show}
          hide={_toggleOpen}
          title="modal running"
          content="hello world!"
        >
          <Hello />
        </Modal>
      </div>
    </div>
  );
}

export default App;
