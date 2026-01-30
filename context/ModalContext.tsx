import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ModalType = 'contact' | 'whatsapp';

interface ModalContextType {
    isModalOpen: boolean;
    modalType: ModalType | null;
    openModal: (type?: ModalType) => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState<ModalType | null>(null);

    const openModal = (type: ModalType = 'contact') => {
        setModalType(type);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalType(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <ModalContext.Provider value={{ isModalOpen, modalType, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
