import { skillGroups } from "@/src/data/site";

export default function Skills() {
  return (
    <section data-reveal>
      <div className="mb-10">
        <p className="text-sm font-medium text-slate-500">Skills</p>
        <h2 className="mt-4 text-3xl font-normal text-slate-950 sm:text-4xl">
          Technical range
        </h2>
      </div>

      <div className="grid border-y border-slate-200 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <div
            key={group.title}
            className={`border-slate-200 py-7 sm:px-8 ${
              index % 2 === 0 ? "sm:border-r sm:pl-0" : ""
            } ${index >= 2 ? "border-t" : index === 1 ? "border-t sm:border-t-0" : ""}`}
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm leading-6 text-slate-700">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
