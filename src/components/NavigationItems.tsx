import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Navigation items configuration - single source of truth
export const navItems = [
    { id: "photo-types", label: "Fotoğraf Tipleri" },
    { id: "pricing", label: "Fiyatlandırma" },
    { id: "download", label: "İndir" },
    { id: "faq", label: "SSS" },
] as const;

interface NavigationItemsProps {
    onItemClick?: () => void;
    variant: "desktop" | "mobile";
    includeHome?: boolean;
}

/**
 * Reusable navigation items component with Scroll-Spy functionality
 * Highlights the active section based on scroll position
 */
export const NavigationItems = ({
    onItemClick,
    variant,
    includeHome = true,
}: NavigationItemsProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [activeSection, setActiveSection] = useState<string>("");

    // Scroll-Spy: Track which section is currently in view
    useEffect(() => {
        if (!isHomePage) return;

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100; // Offset for header

            // Check if at top of page
            if (scrollPosition < 200) {
                setActiveSection("");
                return;
            }

            // Find which section is currently in view
            for (const item of navItems) {
                const element = document.getElementById(item.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(item.id);
                        return;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Check initial position

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHomePage]);

    const scrollToSection = (id: string) => {
        if (!isHomePage) {
            navigate("/");
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        onItemClick?.();
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("");
        onItemClick?.();
    };

    const goToHome = () => {
        navigate("/");
        onItemClick?.();
    };

    const getButtonClass = (itemId?: string) => {
        const isActive = itemId ? activeSection === itemId : activeSection === "";
        const baseClass = variant === "desktop"
            ? "text-sm font-medium transition-all duration-300"
            : "block w-full py-2 text-left text-sm font-medium transition-all duration-300";

        const activeClass = isActive
            ? "text-primary"
            : "text-muted-foreground hover:text-foreground";

        return `${baseClass} ${activeClass}`;
    };

    // For non-home pages, only show "Ana Sayfa" button
    if (!isHomePage) {
        return (
            <button onClick={goToHome} className={getButtonClass()}>
                Ana Sayfa
            </button>
        );
    }

    return (
        <>
            {includeHome && (
                <button onClick={scrollToTop} className={getButtonClass()}>
                    Ana Sayfa
                </button>
            )}
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={getButtonClass(item.id)}
                >
                    {item.label}
                </button>
            ))}
        </>
    );
};

export default NavigationItems;
