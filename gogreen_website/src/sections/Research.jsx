"use client";
import { research } from "../constants";

const Research = () => (
  <section id="research" className="c-space section-spacing">
    <h2 className="text-heading">Research</h2>
    <div className="mt-8 space-y-6">
      {research.map((r, i) => (
        <div key={i} className="p-5 rounded-xl border border-white/10 bg-primary">
          <h3 className="text-lg font-semibold text-white">{r.org}</h3>
          <p className="text-neutral-300">{r.role}</p>
          <p className="text-neutral-400 text-sm">{r.date}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {r.focus?.map((f, j) => (
              <span key={j} className="px-2 py-1 text-xs rounded bg-white/10">{f}</span>
            ))}
          </div>
          <ul className="mt-3 list-disc pl-5 text-neutral-400">
            {r.outcomes?.map((o, j) => <li key={j}>{o}</li>)}
          </ul>
          <div className="mt-4 flex gap-4">
            {r.links?.map((l, j) => (
              <a
                key={j}
                className="nav-link"
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Research;
