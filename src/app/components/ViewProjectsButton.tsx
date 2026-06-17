import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ViewProjectsButton() {
  return (
    <Link
      href="/projects"
      className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-bold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white"
    >
      View Projects
      <FaArrowRight className="text-xs" />
    </Link>
  );
}
