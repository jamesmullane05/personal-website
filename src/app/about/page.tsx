import Experience from "./Experience";
import Introduction from "./Introduction";
import Skills from "./Skills";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-14 px-5 py-14 sm:px-6">
      <Introduction />
      <Experience />
      <Skills />
    </main>
  );
}
