import React, { createContext, useContext, useState, useCallback } from "react";
import Modal from "../components/modal/modal.component";

const ModalContext = createContext();

// modal.context.js or wherever this lives
export const ModalProvider = ({ children }) => {
  const [modalData, setModalData] = useState({
    isOpen: false,
    title: "",
    message: "",
    actionText: "",
    onAction: null,
    resolve: null,
  });

  const alertMessage = useCallback(
    ({ title, message, actionText, onAction }) => {
      return new Promise((resolve) => {
        setModalData({
          isOpen: true,
          title,
          message,
          actionText,
          onAction,
          resolve,
        });
      });
    },
    []
  );

  const closeModal = () => {
    if (modalData.resolve) modalData.resolve();
    setModalData({ isOpen: false, title: "", message: "", resolve: null });
  };

  const handleAction = () => {
    if (modalData.onAction) modalData.onAction();
    closeModal();
  };

  return (
    <ModalContext.Provider value={{ alertMessage }}>
      {children}
      <Modal
        isOpen={modalData.isOpen}
        title={modalData.title}
        message={modalData.message}
        actionText={modalData.actionText}
        onAction={handleAction}
        onClose={closeModal}
      />
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
