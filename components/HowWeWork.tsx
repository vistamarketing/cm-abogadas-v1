import React from 'react';
import { MessageCircle, FileSearch, CheckCircle2 } from 'lucide-react';

export const HowWeWork: React.FC = () => {
    const steps = [
        {
            number: '01',
            icon: MessageCircle,
            title: 'Contáctanos y Cuéntanos tu Historia',
            description: 'Sabemos que cada historia es única, y así la tratamos. Desde el primer contacto, te escuchamos con atención para entender tu situación y acompañarte en cada paso. No eres un simple cliente, eres una historia de vida que merece ser tratada con dedicación y cercanía.'
        },
        {
            number: '02',
            icon: FileSearch,
            title: 'Evaluamos tu Caso y Preparamos tu Plan de Acción',
            description: 'Analizamos tu situación en detalle y diseñamos un plan legal personalizado. Te presentamos las opciones disponibles, los plazos y un presupuesto transparente, para que tengas claridad total sobre el proceso.'
        },
        {
            number: '03',
            icon: CheckCircle2,
            title: 'Checklist Personalizado y Acompañamiento Continuo',
            description: 'Si aceptas el presupuesto, te enviamos un checklist detallado con todos los pasos y documentos necesarios. Te acompañamos en cada tarea, resolviendo dudas y asegurándonos de que avances con confianza hacia tu objetivo.'
        }
    ];

    return (
        <section className="py-20 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="text-brand-primary font-bold tracking-[0.3em] uppercase text-xs mb-8 block leading-none">
                        — NUESTRO PROCESO —
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-darker mb-6">
                        ¿Cómo Trabajamos?
                    </h2>
                    <p className="text-xl text-brand-secondary max-w-3xl mx-auto font-sans">
                        Un proceso simple y transparente, diseñado para que te sientas acompañado en cada momento.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={index}
                                className="relative bg-white p-10 border border-stone-100 hover:shadow-2xl transition-all duration-500 group"
                            >
                                {/* Step Number */}
                                <div className="text-4xl font-serif font-light text-brand-primary/20 group-hover:text-brand-primary/40 transition-colors mb-6">
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className="mb-6">
                                    <Icon size={32} className="text-brand-primary" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-brand-darker mb-4 font-serif">
                                    {step.title}
                                </h3>
                                <p className="text-brand-secondary leading-relaxed font-sans">
                                    {step.description}
                                </p>

                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-lg text-brand-secondary mb-6 font-sans">
                        <strong className="text-brand-darker">Tu historia importa.</strong> Estamos aquí para acompañarte en cada paso del camino.
                    </p>
                </div>
            </div>
        </section>
    );
};
