// components/NavigationBar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

type NavLink = {
    label: string;
    href: string;
};

const links: NavLink[] = [
    { label: "Главная", href: "/" },
    { label: "О нас", href: "/about" },
    { label: "Контакты", href: "/contact" },
    { label: "Блог", href: "/blog" },
    { label: "FAQ", href: "/faq" },
];

export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Логотип */}
                    <div className="flex-shrink-0 flex items-center text-xl font-bold text-blue-600">
                        <Link href="/">Shoks SAT</Link>
                    </div>

                    {/* Десктоп меню */}
                    <div className="hidden md:flex space-x-6 items-center">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-blue-600"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Мобильное меню кнопка */}
                    <div className="flex md:hidden items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 focus:outline-none"
                        >
                            {isOpen ? "✖" : "☰"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Мобильное меню */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="block text-gray-700 hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}