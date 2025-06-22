import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronUp } from '~/components/Icons';
import { cn } from '~/utils';

/**
 * @component
 * BackToTop component that displays a button to scroll to the top of the page.
 * @description
 * - The button appears when the user scrolls down **300px**.
 * - The page automatically scrolls to the top when the route changes.
 * - Provides a smooth scrolling effect when clicked.
 */
const BackTopTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { pathname } = useLocation();

    // Toggle visibility of the button based on scroll position.
    const toggleVisibility = useCallback(
        () => setIsVisible(window.scrollY > 300),
        []
    );

    // Scrolls to the top when the route changes.
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 50);
    }, [pathname]);

    // Listens for scroll events to determine when to show the button.
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, [toggleVisibility]);

    // Scrolls smoothly to the top of the page.
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            type='button'
            className={cn(
                'fixed right-2.5 bottom-2.5 size-[50px] flex justify-center items-center rounded-full text-white bg-primary select-none cursor-pointer opacity-0 invisible shadow-[0_0.4rem_0.8rem_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out translate-y-5 z-5',
                'active:scale-105',
                { 'opacity-100 visible translate-y-0': isVisible }
            )}
            onClick={scrollToTop}
        >
            <ChevronUp className='size-5 stroke-[3.5] shrink-0' />
        </button>
    );
};

export default BackTopTop;
