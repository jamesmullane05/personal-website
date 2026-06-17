import { FaDownload } from "react-icons/fa";
import { profile } from "@/src/data/site";

export default function DownloadCVButton() {
  return (
    <a
      href={profile.resume}
      download="James_Mullane_Resume.pdf"
      className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
    >
      <FaDownload className="text-xs" />
      Download CV
    </a>
  );
}
