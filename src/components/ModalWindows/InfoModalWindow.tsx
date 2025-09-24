"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, Variants } from "framer-motion";
import { X } from "lucide-react";

interface InfoModalWindowProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children?: React.ReactNode;
    className?: string;
}

export default function InfoModalWindow({
    isOpen,
    onClose,
    title,
    children,
    className = "",
}: InfoModalWindowProps) {
    const [mounted, setMounted] = useState(false);
    const [portalRoot, setPortalRoot] = useState<HTMLDivElement | null>(null);
    const closeBtnRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const div = document.createElement("div");
        div.setAttribute("data-modal-root", "");
        document.body.appendChild(div);
        setPortalRoot(div);

        return () => {
            if (div.parentElement) div.parentElement.removeChild(div);
            setPortalRoot(null);
        };
    }, []);

    useEffect(() => {
        if (!mounted) return;
        if (isOpen) {
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            setTimeout(() => closeBtnRef.current?.focus(), 50);
            return () => {
                document.body.style.overflow = prev;
            };
        }
    }, [isOpen, mounted]);

    // Esc
    useEffect(() => {
        if (!mounted) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) onClose();
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [isOpen, onClose, mounted]);

    if (!portalRoot) return null;

    const backdropVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const panelVariants: Variants = {
        hidden: { opacity: 0, y: 12, scale: 0.99 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };
    const wrapperStyle: React.CSSProperties = { pointerEvents: isOpen ? "auto" : "none" };
    const panelStyle: React.CSSProperties = { outline: "none", pointerEvents: isOpen ? "auto" : "none" };

    const modal = (
        <div
            aria-hidden={!isOpen}
            className="fixed inset-0 z-[1100] flex items-center justify-center px-4 sm:px-6"
            style={wrapperStyle}
        >
            <motion.div
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
                variants={backdropVariants}
                transition={{ duration: 0.18 }}
                onClick={isOpen ? onClose : undefined}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm"
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
            />

            <motion.section
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? "modal-title" : undefined}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
                variants={panelVariants}
                transition={{ duration: 0.18, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                className={`relative z-10 w-full max-w-2xl mx-auto rounded-2xl ${className}`}
                style={panelStyle}
            >
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8">
                    <div className="flex items-start justify-between mb-4">
                        <div className="pr-6">
                            {title ? (
                                <h3 id="modal-title" className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {title}
                                </h3>
                            ) : null}
                        </div>

                        <button
                            ref={closeBtnRef}
                            aria-label="Close"
                            onClick={onClose}
                            className="ml-4 inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
                        >
                            <X className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                        </button>
                    </div>

                    <div className="text-sm text-gray-700 dark:text-gray-300 space-y-4">{children}</div>
                </div>
            </motion.section>
        </div>
    );

    return createPortal(modal, portalRoot);
}