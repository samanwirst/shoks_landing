"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageViewModalWindowProps {
    isOpen: boolean;
    onClose: () => void;
    src?: string;
    alt?: string;
    images?: string[];
    currentIndex?: number;
    onIndexChange?: (index: number) => void;
    title?: string;
    className?: string;
}

export default function ImageViewModalWindow({
    isOpen,
    onClose,
    src,
    alt = "",
    images,
    currentIndex = 0,
    onIndexChange,
    title,
    className = "",
}: ImageViewModalWindowProps) {
    const [mounted, setMounted] = useState(false);
    const [portalRoot, setPortalRoot] = useState<HTMLDivElement | null>(null);
    const closeBtnRef = useRef<HTMLButtonElement | null>(null);
    const lastActiveRef = useRef<HTMLElement | null>(null);

    const [localIndex, setLocalIndex] = useState<number>(currentIndex);
    useEffect(() => setLocalIndex(currentIndex), [currentIndex]);

    const controlled = typeof onIndexChange === "function" && Array.isArray(images);

    useEffect(() => setMounted(true), []);
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
            lastActiveRef.current = document.activeElement as HTMLElement | null;
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            setTimeout(() => closeBtnRef.current?.focus(), 50);
            return () => {
                document.body.style.overflow = prev;
                lastActiveRef.current?.focus?.();
            };
        }
    }, [isOpen, mounted]);

    useEffect(() => {
        if (!mounted) return;
        const onKey = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") {
                if (images && images.length > 0) {
                    const idx = controlled ? currentIndex : localIndex;
                    const prev = idx > 0 ? idx - 1 : idx;
                    if (prev !== idx) {
                        controlled ? onIndexChange!(prev) : setLocalIndex(prev);
                    }
                }
            }
            if (e.key === "ArrowRight") {
                if (images && images.length > 0) {
                    const idx = controlled ? currentIndex : localIndex;
                    const next = idx < images.length - 1 ? idx + 1 : idx;
                    if (next !== idx) {
                        controlled ? onIndexChange!(next) : setLocalIndex(next);
                    }
                }
            }
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [isOpen, mounted, images, currentIndex, localIndex, controlled, onIndexChange, onClose]);

    const backdropVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const panelVariants: Variants = {
        hidden: { opacity: 0, y: 12, scale: 0.99 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };

    const activeIndex = images && images.length > 0 ? (controlled ? currentIndex : localIndex) : 0;
    const activeSrc = images && images.length > 0 ? images[activeIndex] : src;

    useEffect(() => {
        if (!activeSrc) return;
        const img = new Image();
        img.src = activeSrc;
    }, [activeSrc]);

    const onPrev = () => {
        if (!images || images.length === 0) return;
        const prev = activeIndex > 0 ? activeIndex - 1 : activeIndex;
        if (prev !== activeIndex) {
            controlled ? onIndexChange!(prev) : setLocalIndex(prev);
        }
    };
    const onNext = () => {
        if (!images || images.length === 0) return;
        const next = activeIndex < images.length - 1 ? activeIndex + 1 : activeIndex;
        if (next !== activeIndex) {
            controlled ? onIndexChange!(next) : setLocalIndex(next);
        }
    };

    const wrapperStyle: React.CSSProperties = { pointerEvents: isOpen ? "auto" : "none" };
    const panelStyle: React.CSSProperties = { outline: "none", pointerEvents: isOpen ? "auto" : "none" };

    if (!portalRoot) return null;

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
                className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
            />

            <motion.section
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? "image-modal-title" : undefined}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
                variants={panelVariants}
                transition={{ duration: 0.18, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                className={`relative z-10 w-full max-w-[95vw] mx-auto ${className}`}
                style={panelStyle}
            >
                <div className="relative rounded-lg max-h-[92vh]">
                    {/* Panel (image container) */}
                    <div className="bg-transparent p-0 rounded-lg flex items-center justify-center max-h-[92vh]">
                        {/* Image */}
                        <div className="relative flex items-center justify-center w-full">
                            {/** Prev button */}
                            {images && images.length > 1 ? (
                                <button
                                    onClick={onPrev}
                                    aria-label="Previous"
                                    className="absolute left-2 cursor-pointer top-1/2 -translate-y-1/2 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/30 hover:bg-black/45 backdrop-blur-sm text-white dark:border-2 dark:hover:border-[#FF5F23]"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                            ) : null}

                            <div className="mx-auto max-h-[88vh] w-auto relative">
                                <AnimatePresence mode="wait">
                                    {activeSrc ? (
                                        <motion.img
                                            key={activeSrc}
                                            src={activeSrc}
                                            alt={alt}
                                            className="object-contain block max-w-[95vw] max-h-[88vh] select-none"
                                            loading="lazy"
                                            draggable={false}
                                            initial={{ opacity: 0, scale: 0.995 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.995 }}
                                            transition={{ duration: 0.28, ease: "easeOut" }}
                                        />
                                    ) : (
                                        <motion.div className="p-8 text-sm text-gray-200" key="no-image" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>No image</motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Next button */}
                            {images && images.length > 1 ? (
                                <button
                                    onClick={onNext}
                                    aria-label="Next"
                                    className="absolute cursor-pointer transition-all duration-300 ease-out right-2 top-1/2 -translate-y-1/2 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/30 hover:bg-black/45 backdrop-blur-sm text-white dark:border-2 dark:hover:border-[#FF5F23]"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            ) : null}
                        </div>
                    </div>

                    {/* Top-right controls: title, close */}
                    <div className="absolute top-3 right-3 z-30 flex items-center gap-2">
                        <button
                            ref={closeBtnRef}
                            aria-label="Close"
                            onClick={onClose}
                            className="inline-flex transition-all duration-300 ease-out cursor-pointer h-9 w-9 items-center justify-center rounded-md bg-black/30 hover:bg-black/45 text-white dark:border-2 dark:hover:border-[#FF5F23]"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </motion.section>
        </div>
    );

    return createPortal(modal, portalRoot);
}
