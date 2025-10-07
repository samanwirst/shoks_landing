"use client";

import { useCallback, useEffect, useState } from "react";
import { getCookie, setCookie } from "@/lib/cookies";

export type Theme = "light" | "dark" | "system";
const COOKIE_NAME = "theme";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

function prefersDark(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyHtmlClass(shouldDark: boolean) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", shouldDark);
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";
    const cookie = getCookie(COOKIE_NAME) as Theme | null;
    return (cookie ?? "system") as Theme;
  });

  const [systemTheme, setSystemTheme] = useState<"light" | "dark" | undefined>(() => {
    if (typeof window === "undefined") return undefined;
    return prefersDark() ? "dark" : "light";
  });

  useEffect(() => {
    if (theme === "system") {
      const shouldDark = prefersDark();
      applyHtmlClass(shouldDark);
      setCookie(COOKIE_NAME, "system", { path: "/", maxAge: COOKIE_MAX_AGE });
      setSystemTheme(shouldDark ? "dark" : "light");
    } else {
      applyHtmlClass(theme === "dark");
      setCookie(COOKIE_NAME, theme, { path: "/", maxAge: COOKIE_MAX_AGE });
    }

    // Listen to system dark changes when theme === 'system'
    const mql = typeof window !== "undefined" ? window.matchMedia?.("(prefers-color-scheme: dark)") : null;
    const listener = (e: MediaQueryListEvent) => {
      const newSystem = e.matches ? "dark" : "light";
      setSystemTheme(newSystem);
      if (theme === "system") applyHtmlClass(e.matches);
    };

    if (mql && "addEventListener" in mql) {
      mql.addEventListener("change", listener);
    } else if (mql && "addListener" in mql) {
      // older browsers
      // @ts-ignore
      mql.addListener(listener);
    }

    return () => {
      if (mql && "removeEventListener" in mql) {
        mql.removeEventListener("change", listener);
      } else if (mql && "removeListener" in mql) {
        // @ts-ignore
        mql.removeListener(listener);
      }
    };
  }, [theme]);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const resolvedTheme: "light" | "dark" | undefined =
    theme === "system" ? systemTheme : (theme === "dark" ? "dark" : "light");

  return { theme, setTheme, toggleTheme, systemTheme, resolvedTheme } as const;
}