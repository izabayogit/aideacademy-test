import { createContext, useState, useContext } from 'react'

export const DeleteContext = createContext(null)

export const DeleteProvider = ({ children }) => {
        const [openModal, setOpenModal] = useState(false)

        const closeModal = () => {
                setOpenModal(false)
        }

        return <DeleteContext.Provider value={{ openModal, showConfirm, closeModal }}>
                {children}
        </DeleteContext.Provider>
}


export const useDeleteContext = () => {
        return useContext(DeleteContext)
}





