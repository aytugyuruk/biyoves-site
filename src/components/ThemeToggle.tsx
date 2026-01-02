import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

/**
 * Dark Mode Toggle Component
 * Default: Light mode (regardless of OS preference)
 * Uses localStorage to persist user preference after manual toggle
 */
const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Only check localStorage - ignore system preference
        // Default to light mode if no preference saved
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        } else {
            // Force light mode as default
            setIsDark(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);

        if (newTheme) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                aria-label="Tema değiştir"
                disabled
            >
                <Sun className="h-4 w-4" />
            </Button>
        );
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-9 w-9 transition-all duration-300 hover:bg-accent"
            aria-label={isDark ? "Açık temaya geç" : "Koyu temaya geç"}
        >
            {isDark ? (
                <Sun className="h-4 w-4 transition-transform duration-300 rotate-0 scale-100" />
            ) : (
                <Moon className="h-4 w-4 transition-transform duration-300 rotate-0 scale-100" />
            )}
        </Button>
    );
};

export default ThemeToggle;
