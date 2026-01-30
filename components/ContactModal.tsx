import React from 'react';
import { X } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { ContactForm } from './ContactForm';

export const ContactModal: React.FC = () => {
    const { isModalOpen, modalType, closeModal } = useModal();

    if (!isModalOpen || modalType !== 'contact') return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-brand-darker/60 backdrop-blur-sm"
                onClick={closeModal}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-2xl max-h-[95vh] overflow-y-auto rounded-sm shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden">
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-2 text-brand-secondary hover:text-brand-primary transition-colors z-20 bg-white/80 backdrop-blur-sm rounded-full"
                    aria-label="Cerrar modal"
                >
                    <X size={24} />
                </button>

                <div className="p-8 sm:p-10">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-darker mb-3">
                            Comienza tu proceso hoy
                        </h2>
                        <p className="text-brand-secondary font-sans text-sm md:text-base">
                            Déjanos tus datos y nos pondremos en contacto contigo.
                        </p>
                    </div>

                    <ContactForm variant="modal" />
                </div>
            </div>
        </div>
    );
};
