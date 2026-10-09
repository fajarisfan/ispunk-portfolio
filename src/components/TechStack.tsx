"use client";

import { usePortfolio } from "@/context/PortfolioContext";
import { T } from "@/lib/translations";

const TECHS = [
  { name: "Python", desc: "main lang", slug: "python" },
  { name: "Flutter", desc: "mobile", slug: "flutter" },
  { name: "PowerShell", desc: "automation", slug: "powershell" },
  { name: "Streamlit", desc: "data apps", slug: "streamlit" },
  { name: "PostgreSQL", desc: "database", slug: "postgresql" },
  { name: "REST API", desc: "integrations", slug: "json" },
  { name: "Replit", desc: "cloud coding", slug: "replit" },
  { name: "Supabase", desc: "backend", slug: "supabase" },
  { name: "Git", desc: "vcs", slug: "git" },
  { name: "Linux", desc: "server", slug: "linux" },
];

export function TechStack() {
  const { lang } = usePortfolio();

  return (
    <section id="tech" className="section section--band tech-section">
      <div className="section-inner">
        <h2
          className="section-title"
          dangerouslySetInnerHTML={{ __html: T.tech_title[lang] }}
        />
        <p className="section-subtitle">
          {lang === "id" ? "YANG GUE PAKE" : "WHAT I USE"}
        </p>
        <div className="tech-grid">
          {TECHS.map((t) => (
            <div key={t.name} className="tech-item">
              <img
                src={`https://cdn.simpleicons.org/${t.slug}/ff2d2d`}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="tech-logo"
                onError={(e) => {
                  e.currentTarget.style.visibility = "hidden";
                }}
              />
              <span className="tech-name">{t.name}</span>
              <span className="tech-desc">{t.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
