import React from 'react';
import { X } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { ContactForm } from './ContactForm';

export const ContactModal: React.FC = () => {
    const { isModalOpen, closeModal } = useModal();

    if (!isModalOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-brand-darker/60 backdrop-blur-sm"
                onClick={closeModal}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200">
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-2 text-brand-secondary hover:text-brand-primary transition-colors z-10 bg-white/80 backdrop-blur-sm rounded-full"
                    aria-label="Cerrar modal"
                >
                    <X size={28} />
                </button>

                <div className="p-1">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};
