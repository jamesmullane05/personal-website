"use client";

import Image from "next/image";
import { useTheme } from "../context/themeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className={`theme-toggle ${isDark ? "is-dark" : "is-light"}`}
      data-cursor="hover"
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <span className="theme-toggle-stars" />
        <Image className="theme-toggle-image theme-toggle-sun" src="/icons/theme-sun.svg" alt="" width={96} height={96} draggable={false} priority />
        <Image className="theme-toggle-image theme-toggle-moon" src="/icons/theme-moon.svg" alt="" width={96} height={96} draggable={false} priority />
      </span>
      <span className="theme-toggle-label">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
