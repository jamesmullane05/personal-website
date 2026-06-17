import Link from "next/link";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import { projects, skillGroups, techIcons } from "@/src/data/site";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <main>
      <Hero />

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">What I do</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Software that saves time, connects systems, and feels simple to use.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              My strongest work combines full-stack development with e-commerce operations: APIs, automation, CSV processing, database workflows, and practical tools that remove repetitive manual work.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Full-stack web apps with React, Next.js, TypeScript, and Tailwind CSS.",
              "Backend/API work with Python, Flask, Node.js, SQL, and Prisma.",
              "Automation tools for Shopify, CSV imports, marketplace listings, and label printing.",
              "Team development experience through capstone projects and WDCC collaboration.",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
                <FaCheckCircle className="text-emerald-600" />
                <p className="mt-4 font-semibold leading-7 text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">Featured projects</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Selected technical work</h2>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-2 font-bold text-slate-950 hover:text-sky-700">
            See all projects <FaArrowRight className="text-xs" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} featured={index === 0} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-xl shadow-slate-300/40 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">Tech stack</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Tools I use to build</h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techIcons.map(({ name, Icon }) => (
              <div key={name} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <Icon className="text-2xl text-sky-200" />
                <span className="font-semibold text-slate-100">{name}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-bold text-white">{group.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{group.skills.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
