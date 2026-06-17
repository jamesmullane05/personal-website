import { experience } from "@/src/data/site";

export default function Experience() {
  return (
    <section>
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">Experience</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Commercial and technical background</h2>
      </div>

      <div className="space-y-5">
        {experience.map((item) => (
          <article key={`${item.company}-${item.role}`} className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-black text-slate-950">{item.role}</h3>
                <p className="font-semibold text-sky-700">{item.company}</p>
              </div>
              <p className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-500">{item.date}</p>
            </div>
            <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
