import React from "react";
import "./Modal.css";
import Aux from "../../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => {
  return props.show ? (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div className="Modal">{props.children}</div>;
    </Aux>
  ) : null;
};

export default Modal;
