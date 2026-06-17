import Link from "next/link";
import { profile } from "@/src/data/site";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "LeetCode", href: "/leetcode" },
  { name: "Contact", href: "/contact" },
];

export default function NavigationBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur-xl transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
        <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label="Go to home page">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-sm transition group-hover:-translate-y-0.5 dark:bg-white dark:text-slate-950">
            {profile.initials}
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-bold text-slate-950 dark:text-white">{profile.name}</span>
            <span className="block text-xs text-slate-500 dark:text-slate-400">{profile.navbarSubtitle}</span>
          </span>
        </Link>

        <div className="flex min-w-0 items-center gap-2">
          <div className="flex max-w-[58vw] items-center gap-1 overflow-x-auto rounded-full border border-slate-200 bg-white p-1 text-sm shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900 sm:max-w-none">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full px-3 py-2 font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white sm:px-4"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
