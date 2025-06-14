import React, { createContext, useContext, useState, useCallback } from "react";
import Modal from "../components/modal/modal.component";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalData, setModalData] = useState({ isOpen: false, title: "", message: "", resolve: null });

  // Show modal and return a promise to await user action if needed
  const alertMessage = useCallback(({ title, message }) => {
    return new Promise((resolve) => {
      setModalData({ isOpen: true, title, message, resolve });
    });
  }, []);

  const closeModal = () => {
    if (modalData.resolve) {
      modalData.resolve();
    }
    setModalData({ isOpen: false, title: "", message: "", resolve: null });
  };

  return (
    <ModalContext.Provider value={{ alertMessage }}>
      {children}
      <Modal isOpen={modalData.isOpen} title={modalData.title} message={modalData.message} onClose={closeModal} />
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
