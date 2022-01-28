import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

//this element is needed for the background shadow
const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

//overlay el3ement is created in index.html file in the public folder 
const portalElement = document.getElementById('overlays');

//here we use "portal" - ReactDOM.createPortal to output backdrop and modal in "overlays" div
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
