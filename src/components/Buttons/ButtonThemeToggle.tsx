"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const ORDER: Array<"system" | "light" | "dark"> = ["system", "light", "dark"];

export default function ButtonThemeToggle() {
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const next = () => {
        const idx = ORDER.indexOf(theme ?? "system");
        const nextIdx = (idx + 1) % ORDER.length;
        setTheme(ORDER[nextIdx]);
    };

    const icons = {
        light: <Sun size={20} />,
        dark: <Moon size={20} />,
        system: <Monitor size={20} />,
    };

    const currentTheme = theme ?? "system";

    if (!mounted) {
        return (
            <button
                className="flex items-center justify-center w-10 h-10 cursor-pointer rounded-lg bg-background text-foreground hover:bg-accent hover:text-accent-foreground border border-border transition-colors"
                aria-label="Toggle theme"
                title="Toggle theme"
                disabled
            >
                <Monitor size={20} />
            </button>
        );
    }

    return (
        <button
            onClick={next}
            aria-label={`Toggle theme (current: ${currentTheme})`}
            title={`Theme: ${currentTheme} — click to switch`}
            className="flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer bg-background text-foreground hover:bg-accent hover:text-accent-foreground border border-border transition-colors duration-200"
        >
            {icons[currentTheme]}
        </button>
    );
}