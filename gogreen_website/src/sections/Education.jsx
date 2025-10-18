"use client";
import { education } from "../constants";

const Education = () => (
  <section id="education" className="c-space section-spacing">
    <h2 className="text-heading">Education</h2>
    <div className="mt-8 space-y-6">
      {education.map((e, i) => (
        <div key={i} className="p-5 rounded-xl border border-white/10 bg-primary">
          <h3 className="text-xl font-semibold text-white">{e.school}</h3>
          <p className="text-neutral-300">{e.program}</p>
          <p className="text-neutral-400 text-sm">{e.date}</p>
          <ul className="mt-3 list-disc pl-5 text-neutral-400">
            {e.details?.map((d, j) => <li key={j}>{d}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
