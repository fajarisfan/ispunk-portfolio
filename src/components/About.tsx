"use client";

import Image from "next/image";
import profilePhoto from "../../public/profile.webp";
import { usePortfolio } from "@/context/PortfolioContext";
import { T } from "@/lib/translations";

export function About() {
  const { lang } = usePortfolio();

  return (
    <section id="about" className="section section--band about-section">
      <div className="section-inner">
        <h2
          className="section-title"
          dangerouslySetInnerHTML={{ __html: T.about_title[lang] }}
        />
        <p className="section-subtitle">
          {lang === "id" ? "SIAPA GUE" : "WHO AM I"}
        </p>
        <div className="about-grid">
          <div className="about-photo-wrap">
            <Image
              src={profilePhoto}
              alt="Isfan Fajar Anugrah"
              className="about-photo"
              sizes="210px"
              priority
            />
            <span className="about-photo-tape" />
          </div>
          <div className="about-text">
            <p dangerouslySetInnerHTML={{ __html: T.about_p1[lang] }} />
            <p dangerouslySetInnerHTML={{ __html: T.about_p2[lang] }} />
          </div>
          <div className="about-ascii">
            <pre>{`
 +------------------+
 |  $ python main   |
 |  > running...    |
 |  > done. ✓       |
 +------------------+
 |  healthcare IT   |
 |  automation      |
 |  data tools      |
 +------------------+
  `}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}
