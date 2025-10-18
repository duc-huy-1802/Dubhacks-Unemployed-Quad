"use client";
import { physics } from "../constants";

const Physics = () => (
  <section id="physics" className="c-space section-spacing">
    <h2 className="text-heading">Physics — Demos & Tools</h2>
    <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2">
      {physics.map((p, i) => (
        <article key={i} className="p-5 rounded-xl border border-white/10 bg-primary">
          <h3 className="text-lg font-semibold text-white">{p.title}</h3>
          <p className="mt-1 text-neutral-300">{p.summary}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tech?.map((t, j) => (
              <span key={j} className="px-2 py-1 text-xs rounded bg-white/10">{t}</span>
            ))}
          </div>
          <div className="mt-4 flex gap-4">
            {p.links?.demo && (
              <a className="nav-link" href={p.links.demo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            )}
            {p.links?.repo && (
              <a className="nav-link" href={p.links.repo} target="_blank" rel="noopener noreferrer">
                Source
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Physics;