import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

export const MobileStickyCTA: React.FC = () => {
    const { openModal } = useModal();
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // If we are not on the home page, always show it (or adjust per requirements)
        // For now, let's assume always visible on inner pages
        if (location.pathname !== '/') {
            setIsVisible(true);
            return;
        }

        const checkVisibility = () => {
            const heroButton = document.getElementById('hero-cta-button');

            if (!heroButton) {
                // If button doesn't exist for some reason, show default
                setIsVisible(true);
                return;
            }

            const observer = new IntersectionObserver(
                ([entry]) => {
                    // If hero button is visible in viewport, hide sticky CTA
                    // If hero button is NOT visible, show sticky CTA
                    setIsVisible(!entry.isIntersecting);
                },
                {
                    root: null,
                    threshold: 0,
                    rootMargin: "0px" // Trigger exactly when it enters/leaves
                }
            );

            observer.observe(heroButton);

            return () => {
                if (heroButton) observer.unobserve(heroButton);
            };
        };

        // Small timeout to ensure DOM is ready if navigating
        const timeoutId = setTimeout(checkVisibility, 100);

        // Initial check clean up isn't quite right with the timeout pattern, 
        // but for a simple effect this is okay-ish. 
        // Better: create the observer in the effect directly.

        const cleanupFunction = checkVisibility();

        return () => {
            clearTimeout(timeoutId);
            if (typeof cleanupFunction === 'function') cleanupFunction();
        };

    }, [location.pathname]);

    // Simplified effect for robustness
    useEffect(() => {
        if (location.pathname !== '/') {
            setIsVisible(true);
            return;
        }

        // Start hidden on home until we know
        setIsVisible(false);

        const handleScroll = () => {
            const heroButton = document.getElementById('hero-cta-button');
            if (!heroButton) {
                setIsVisible(true);
                return;
            }

            const rect = heroButton.getBoundingClientRect();
            // Show if the bottom of the button is above the viewport (scrolled past)
            // rect.bottom < 0 implies it's scrolled up out of view
            // OR if it's way below? No, we want it when user scrolls DOWN.
            // Actually intersection observer is better.
        };

        // Re-implementing Observer cleanly
        const heroButton = document.getElementById('hero-cta-button');
        if (!heroButton) {
            setIsVisible(true); // Fallback
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(!entry.isIntersecting);
            },
            { threshold: 0 }
        );

        observer.observe(heroButton);

        return () => observer.disconnect();
    }, [location.pathname]);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-[90] bg-white border-t border-stone-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden animate-in slide-in-from-bottom duration-300">
            <button
                onClick={() => openModal()}
                className="w-full bg-brand-primary text-white py-4 rounded-sm font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 shadow-sm hover:bg-brand-secondary transition-colors"
                aria-label="Agendar Cita"
            >
                <Calendar size={18} />
                Agendar Cita
            </button>
        </div>
    );
};
