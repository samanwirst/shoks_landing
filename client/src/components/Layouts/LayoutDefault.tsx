"use client";
import Header from "../Header";
import WelcomeSection from "../Header/WelcomeSection";
import { usePathname } from "next/navigation";

export default function LayoutDefault({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <div className="h-screen transition ease-out duration-300">
            <Header>
                {pathname === "/" && (
                    <WelcomeSection />
                )}
            </Header>

            <main>
                {children}
            </main>
        </div>
    );
}