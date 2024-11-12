import { useEffect } from 'react';

const useIntersectionObserver = (
    setActiveSection: (section: string) => void,
    setNavbarVisible: (isVisible: boolean) => void
) => {
    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const landing = document.getElementById('landing');
        console.log(sections);

        // Observer for changing the active section
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.8 } // Trigger when 60% of the section is in view
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        // Observer for navbar visibility
        if (landing) {
            const landingObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        // Hide navbar when landing is in view, show when it is not
                        setNavbarVisible(!entry.isIntersecting);
                    });
                },
                { threshold: 0.5 } // Trigger when only a small part of landing is in view
            );

            landingObserver.observe(landing);

            return () => {
                landingObserver.unobserve(landing);
            };
        }

        return () => {
            
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, [setActiveSection, setNavbarVisible]);
};

export default useIntersectionObserver;
