"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    name: "ApnaScheme",
    type: "Founder & Sole Developer",
    text: "A multilingual WhatsApp platform helping people find government schemes they are eligible for—then guiding them to the next step.",
    metrics: ["50+ users", "160+ schemes", "4 languages"],
    stack: "Node.js · Express · MongoDB · WhatsApp Business API · Razorpay",
  },
  {
    number: "02",
    name: "GovSentinel",
    type: "AI for governance · Team of 3",
    text: "A real-time public-sentiment monitoring system that turns social discussion into understandable signals for governance teams.",
    metrics: ["Real-time ingestion", "AI sentiment", "Topic discovery"],
    stack: "DistilBERT · RoBERTa · BERTopic · FastAPI · React",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [year, setYear] = useState(2026);

  useEffect(() => setYear(new Date().getFullYear()), []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" onClick={closeMenu}>Aryan Mange<span>®</span></a>
        <button className="menu" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "CLOSE" : "MENU"}</button>
        <div className={`links ${menuOpen ? "open" : ""}`}>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      </nav>

      <section id="top" className="hero section">
        <p className="eyebrow reveal">Mumbai, India · 2026</p>
        <h1 className="reveal delay-1">I build useful<br /><em>things</em> for people.</h1>
        <div className="hero-bottom reveal delay-2">
          <p>I’m Aryan Mange—an engineering student, founder, and developer building thoughtful digital products at the intersection of AI, software, and public impact.</p>
          <a className="circle-link" href="#work" aria-label="View selected work">↓</a>
        </div>
        <div className="ticker" aria-hidden="true"><span>BUILDER · DEVELOPER · PROBLEM SOLVER · BUILDER · DEVELOPER · PROBLEM SOLVER · </span></div>
      </section>

      <section id="work" className="section work">
        <div className="section-head"><p className="eyebrow">Selected work</p><p className="eyebrow">(02)</p></div>
        {projects.map((project) => (
          <article className="project" key={project.number}>
            <div className="project-top"><span>{project.number}</span><span>{project.type}</span></div>
            <div className="project-main">
              <h2>{project.name}</h2>
              <p>{project.text}</p>
            </div>
            <div className="project-foot">
              <div className="metrics">{project.metrics.map((metric) => <span key={metric}>{metric}</span>)}</div>
              <p>{project.stack}</p>
            </div>
          </article>
        ))}
      </section>

      <section id="about" className="section about">
        <p className="eyebrow">About me</p>
        <div className="about-grid">
          <h2>I turn curious questions into working products.</h2>
          <div>
            <p>I’m pursuing a B.Tech in Electronics & Telecommunication Engineering at Vidyalankar Institute of Technology, Mumbai. I enjoy the space where technical systems meet everyday human problems.</p>
            <p>As the founder and sole developer of ApnaScheme, I have taken a product from idea to live deployment: defining the problem, writing the backend, connecting payments and WhatsApp workflows, and designing for multilingual users.</p>
            <a className="text-link" href="mailto:aryanmange.work@gmail.com">More about me ↗</a>
          </div>
        </div>
      </section>

      <section className="section experience">
        <div className="section-head"><p className="eyebrow">Experience</p><p className="eyebrow">(01)</p></div>
        <div className="experience-row">
          <div><strong>ZiroEDA</strong><p>Intern</p></div>
          <p>May 2026 — July 2026</p>
          <p>Worked in a startup environment, collaborating on real-world software issues and delivering production-ready solutions.
</p>
        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="eyebrow">Get in touch</p>
        <h2>Let’s build<br />something <em>useful.</em></h2>
        <a className="email" href="mailto:aryanmange.work@gmail.com">aryanmange.work@gmail.com <span>↗</span></a>
        <div className="socials">
          <a href="https://github.com/Apnascheme" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://linkedin.com/in/aryanmange" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="tel:+919321875559">+91 93218 75559</a>
        </div>
      </section>

      <footer><span>© {year} Aryan Mange</span><span>Designed & built with intent.</span></footer>
    </main>
  );
}
