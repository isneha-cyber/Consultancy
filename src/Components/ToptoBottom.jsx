import React, { useState, useEffect } from 'react';

const BacktoTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const toggleVisibility = () => {
            const scrolled = window.pageYOffset;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (scrolled / windowHeight) * 100;
            
            setScrollProgress(progress);
            setIsVisible(scrolled > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const openWhatsApp = () => {
        // Correct WhatsApp number format (remove spaces, dashes, and leading +)
        const phoneNumber = '9766013342'; // Format: country code + number (without +, spaces, or dashes)
        const message = 'Hello! I have a question.';
        
        // Check if user is on mobile device for better compatibility
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        
        // Use appropriate URL based on device
        const baseUrl = isMobile ? 'https://api.whatsapp.com' : 'https://web.whatsapp.com';
        const url = `${baseUrl}/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        
        window.open(url, '_blank');
    };

    return (
        <>
            {/* WhatsApp Button - Always visible */}
            <button
                onClick={openWhatsApp}
                className="
                    fixed bottom-4 right-8
                    group
                    cursor-pointer
                    sm:w-14 sm:h-14 w-12 h-12
                    flex items-center justify-center
                    bg-green-500
                    hover:bg-green-600
                    text-white
                    rounded-full
                    shadow-lg
                    hover:shadow-xl
                    transition-all duration-300
                    z-40
                    mb-20
                "
                aria-label="Chat on WhatsApp"
            >
                <div className="absolute inset-0.5 bg-green-500 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                    </svg>
                </div>
                
                <div className="absolute inset-0 rounded-full bg-green-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
            </button>

            {/* Back to Top Button - Only visible when scrolled */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="
                        fixed bottom-8 right-8
                        group cursor-pointer
                        sm:w-14 sm:h-14 w-12 h-12
                        flex items-center justify-center
                        bg-[#1d428c]
                        text-white
                        rounded-full
                        z-50
                    "
                    style={{
                        background: `conic-gradient(from 0deg, #1d428c ${scrollProgress * 3.6}deg, transparent ${scrollProgress * 3.6}deg)`
                    }}
                    aria-label="Scroll to top"
                >
                    <div className="absolute inset-0.5 bg-[#1d428c] rounded-full flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 transition-transform duration-300 group-hover:-translate-y-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                        </svg>
                    </div>
                    
                    <div className="absolute inset-0 rounded-full bg-[#1d428c] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                </button>
            )}
        </>
    );
};

export default BacktoTop;