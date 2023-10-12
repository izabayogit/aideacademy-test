import { createContext, useState, useContext } from "react";

export const DeleteContext = createContext(null);

export const DeleteProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  const openConfirmationModal = () => setOpenModal(true);

  return (
    <DeleteContext.Provider
      value={{ openModal, openConfirmationModal, closeModal }}
    >
      {children}
    </DeleteContext.Provider>
  );
};

export const useDeleteContext = () => {
  const context = useContext(DeleteContext);
  console.log("context", context);
  return context;
};
