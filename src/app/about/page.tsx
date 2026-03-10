import React from "react";
import Skills from "./Skills";
import Experience from "./Experience";
import Title from "./Title"

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      
      {/* Header */}
      <Title/>
      {/* Experience */}
      <Experience/>
      {/* Skills */}
      <Skills list = {["React", "Next.js", "JavaScript", "Tailwind CSS", "HTML", "Git"]}/>

    </main>
  );
}