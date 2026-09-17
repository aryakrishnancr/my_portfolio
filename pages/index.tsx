import Head from "next/head";
import { useState } from "react";
import { portfolioData as data } from "../portfolio";

const navItems = [
  ["01", "About", "about"],
  ["02", "Impact", "impact"],
  ["03", "Experience", "experience"],
  ["04", "Toolkit", "toolkit"],
];

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{data.personalInfo.name} · Data Engineer</title>
        <meta name="description" content={data.about.description} />
        <meta name="theme-color" content="#f2efe8" />
      </Head>
      <div className="site-shell">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Back to top">
            <span className="wordmark-mark">ACR</span>
            <span>{data.personalInfo.name}</span>
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>
            <span>{menuOpen ? "Close" : "Menu"}</span>
            <span className="menu-icon">{menuOpen ? "×" : "☰"}</span>
          </button>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"}>
            {navItems.map(([number, label, href]) => (
              <a href={`#${href}`} key={href} onClick={() => setMenuOpen(false)}>
                <span>{number}</span>{label}
              </a>
            ))}
            <a className="nav-cta" href={`mailto:${data.personalInfo.email}`}>Let&apos;s talk <ArrowUpRight /></a>
          </nav>
        </header>

        <main id="top">
          <section className="hero section-pad">
            <div className="hero-copy">
              <div className="eyebrow"><span className="status-dot" /> Data Engineer · GCP · Airflow · BigQuery</div>
              <h1>Reliable data systems for <em>real decisions.</em></h1>
              <p className="hero-intro">I build cloud pipelines, migration tooling, validation systems, and LLM-powered data products.</p>
              <div className="hero-actions">
                <a className="button button-dark" href="#projects">View selected work <ArrowUpRight /></a>
                <a className="button button-outline" href="/Aryakrishnan_C_R_Resume.pdf" download>Download résumé <ArrowUpRight /></a>
                <a className="text-link" href={data.personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
              </div>
            </div>
            <div className="hero-visual" aria-label="Abstract data pipeline illustration">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="data-core"><span>DATA</span><strong>→</strong><span>IMPACT</span></div>
              <div className="signal signal-a"><span /> pii_lineage <b>98.4%</b></div>
              <div className="signal signal-b"><span /> ingestion_flow <b>LIVE</b></div>
              <div className="signal signal-c"><span /> validation_job <b>0.42s</b></div>
              <div className="hero-index">/ 01</div>
            </div>
          </section>

          <section className="ticker" aria-label="Areas of practice">
            <div className="ticker-track">{data.methodology.concat(data.methodology).map((item, index) => <span key={`${item}-${index}`}>{item}<b>✳</b></span>)}</div>
          </section>

          <section className="about section-pad" id="about">
            <div className="section-intro"><SectionLabel number="01">About</SectionLabel><p className="pull-quote">Cloud data engineering with <em>clear outcomes.</em></p></div>
            <div className="about-content">
              <p>{data.about.description}</p>
              <div className="about-meta"><div><span>Based in</span><strong>{data.personalInfo.location}</strong></div><div><span>Experience</span><strong>{data.personalInfo.experience}</strong></div><div><span>Currently</span><strong>Accenture · AMEX</strong></div></div>
            </div>
          </section>

          <section className="impact section-pad" id="impact">
            <div className="section-intro"><SectionLabel number="02">Impact</SectionLabel><p className="section-heading">Measured <em>outcomes.</em></p></div>
            <div className="metrics-grid">
              <article className="metric-card metric-feature"><span className="metric-value">70<span>%</span></span><span className="metric-label">less manual effort</span><p>Automated migration validation.</p></article>
              <article className="metric-card"><span className="metric-value">90<span>%</span></span><span className="metric-label">validation efficiency</span><p>Cross-environment checks at scale.</p></article>
              <article className="metric-card"><span className="metric-value">50<span>%</span></span><span className="metric-label">faster runtime</span><p>Hash-based comparison over row scans.</p></article>
              <article className="metric-card metric-note"><span className="metric-label">A principle I keep close</span><p>“A pipeline is only production-ready when someone else can reason about it at 2am.”</p><span className="signature">— ACR</span></article>
            </div>
          </section>

          <section className="projects section-pad" id="projects">
            <div className="section-intro"><SectionLabel number="03">Selected work</SectionLabel><p className="section-heading">Built for <em>production.</em></p></div>
            <div className="project-grid">{data.projects.map((project, index) => <article className="project-card" key={project.name}><div className="project-top"><span>0{index + 1}</span><span className="project-type">{project.type}</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="project-stack">{project.stack}</div><div className="project-arrow"><ArrowUpRight /></div></article>)}</div>
          </section>

          <section className="experience section-pad" id="experience">
            <div className="section-intro"><SectionLabel number="04">Experience</SectionLabel><p className="section-heading">Accenture · <em>AMEX.</em></p></div>
            <div className="experience-layout"><div className="company-rail"><span className="rail-dot" /><span className="rail-line" /><span className="rail-location">{data.experience[0].companyPeriod}</span></div><div className="roles">{data.experience[0].roles.map((role, index) => <article className="role" key={role.period}><div className="role-header"><span className="role-period">{role.period}</span><span className="role-count">0{index + 1}</span></div><h3>{role.position}</h3><ul>{role.responsibilities.slice(0, 3).map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul></article>)}</div></div>
          </section>

          <section className="toolkit section-pad" id="toolkit">
            <div className="toolkit-top"><div><SectionLabel number="05">Core stack</SectionLabel><p className="section-heading">Tools I use <em>daily.</em></p></div><p className="toolkit-copy">Python, SQL, GCP, Airflow, BigQuery, Spark, and LLM tooling.</p></div>
            <div className="skill-cloud">{data.skills.concat(data.technicalExpertise, data.tools).filter((skill, index, list) => list.indexOf(skill) === index).map((skill, index) => <span className={index % 4 === 0 ? "skill-pill skill-pill-accent" : "skill-pill"} key={skill}>{skill}</span>)}</div>
            <div className="recognition"><div><span className="eyebrow">Recognition</span><h3>Work that earned trust.</h3></div><div className="recognition-list">{data.highlights.map((item, index) => <div key={item}><span>0{index + 1}</span>{item}</div>)}</div></div>
            <div className="education-strip"><span className="eyebrow">Education</span><div><strong>{data.education.degree} · {data.education.field}</strong><span>{data.education.institution} · {data.education.period} · {data.education.grade}</span></div></div>
          </section>

          <section className="contact section-pad"><div className="contact-card"><div><SectionLabel number="06">Contact</SectionLabel><h2>Let&apos;s build something <em>useful.</em></h2></div><div className="contact-actions"><a className="button button-light" href={`mailto:${data.personalInfo.email}`}>Email me <ArrowUpRight /></a><a className="contact-detail" href={`tel:${data.personalInfo.phone}`}>{data.personalInfo.phone}</a><a className="contact-detail" href={data.personalInfo.github} target="_blank" rel="noreferrer">github.com/aryakrishnancr <ArrowUpRight /></a></div></div></section>
        </main>

        <footer className="site-footer"><span>© {new Date().getFullYear()} {data.personalInfo.name}</span><span>Built with intent · {data.personalInfo.location}</span><a href="#top">Back to top ↑</a></footer>
      </div>
    </>
  );
}
