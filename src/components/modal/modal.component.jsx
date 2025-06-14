import React from "react";
import "./modal.styles.scss";

const Modal = ({ isOpen, title, message, onClose, actionText, onAction }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // prevent backdrop close
      >
        {title && <h2>{title}</h2>}
        {message && <p>{message}</p>}

        <div className="modal-buttons">
          {actionText && (
            <button className="modal-action" onClick={onAction}>
              {actionText}
            </button>
          )}
          <button className="modal-close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
