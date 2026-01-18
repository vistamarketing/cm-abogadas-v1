import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export const CTA: React.FC = () => {
    const { openModal } = useModal();

    return (
        <section className="py-20 bg-brand-darker relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                    ¿Listo para dar el primer paso?
                </h2>
                <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto font-sans">
                    Reserva tu consulta hoy mismo y asegura tu proceso migratorio con expertos en Barcelona.
                </p>
                <button
                    onClick={openModal}
                    className="inline-flex items-center gap-3 bg-brand-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-brand-secondary transition-all shadow-lg hover:shadow-brand-primary/20 text-lg uppercase tracking-wide font-sans"
                >
                    Agendar Cita
                    <ArrowRight size={24} />
                </button>
            </div>
        </section>
    );
};
