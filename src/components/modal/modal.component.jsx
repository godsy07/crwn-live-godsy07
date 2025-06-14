import React from "react";
import "./modal.styles.scss";

const Modal = ({ isOpen, title, message, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
      >
        {title && <h2>{title}</h2>}
        {message && <p>{message}</p>}
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
