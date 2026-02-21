import React, { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useModal } from '../context/ModalContext';

export const WhatsAppModal: React.FC = () => {
    const { isModalOpen, modalType, closeModal } = useModal();
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    if (!isModalOpen || modalType !== 'whatsapp') return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        console.log('WhatsApp Lead Captured:', { name, email });

        await new Promise(resolve => setTimeout(resolve, 500));

        setIsLoading(false);
        closeModal();

        const message = t('whatsappModal.whatsappMessage', { name });
        const whatsappUrl = `https://wa.me/34686401557?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-brand-darker/60 backdrop-blur-sm"
                onClick={closeModal}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-md rounded-sm shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden">
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-2 text-brand-secondary hover:text-brand-primary transition-colors z-20 bg-white/80 backdrop-blur-sm rounded-full"
                    aria-label="Close modal"
                >
                    <X size={24} />
                </button>

                <div className="p-8">
                    <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MessageCircle size={32} className="text-[#25D366]" />
                        </div>
                        <h2 className="text-2xl font-serif font-bold text-brand-darker mb-2">
                            {t('whatsappModal.title')}
                        </h2>
                        <p className="text-brand-secondary font-sans text-sm">
                            {t('whatsappModal.subtitle')}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="wa-name" className="block text-sm font-medium text-brand-darker mb-1 font-sans">
                                {t('whatsappModal.fullName')}
                            </label>
                            <input
                                type="text"
                                id="wa-name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 border border-stone-200 rounded-sm focus:ring-1 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all font-sans"
                                placeholder={t('whatsappModal.fullNamePlaceholder')}
                            />
                        </div>

                        <div>
                            <label htmlFor="wa-email" className="block text-sm font-medium text-brand-darker mb-1 font-sans">
                                {t('whatsappModal.emailLabel')}
                            </label>
                            <input
                                type="email"
                                id="wa-email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border border-stone-200 rounded-sm focus:ring-1 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all font-sans"
                                placeholder={t('whatsappModal.emailPlaceholder')}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#25D366] text-white py-3 rounded-sm font-bold shadow-md hover:bg-[#20bd5a] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                        >
                            {isLoading ? (
                                <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            ) : (
                                <>
                                    <span>{t('whatsappModal.submit')}</span>
                                    <MessageCircle size={18} />
                                </>
                            )}
                        </button>

                        <p className="text-xs text-stone-400 text-center mt-4">
                            {t('whatsappModal.privacy')}
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};
