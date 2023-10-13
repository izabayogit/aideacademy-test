import { createContext, useState, useContext } from "react";
import { deleteCommentHandler } from "../utils/dataHelper"

export const DeleteContext = createContext(null);

export const DeleteProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState("")

  const closeModal = () => {
    setOpenModal(false);

  };
  const handleDelete = () => {
    console.log("delete ....")

    deleteCommentHandler(idToDelete);
    setOpenModal(false);
  };
  const openConfirmationModal = (id) => {
    console.log(id, ".............");
    setIdToDelete(id)
    setOpenModal(true)
  };

  return (
    <DeleteContext.Provider
      value={{ openModal, openConfirmationModal, closeModal, handleDelete }}
    >
      {children}
    </DeleteContext.Provider>
  );
};
const editContext = createContext(null);


export const useDeleteContext = () => {
  const context = useContext(DeleteContext);
  console.log("context", context);
  return context;
};
