"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import ContactForm from "./contact-form";

type Project = {
  title: string;
  category: string;
  image: string;
  url: string;
  github: string;
  linkedin?: string;
};

const projects: Project[] = [
  {
    title: "Guess Game",
    category: "JavaScript",
    image: "/images/1.png",
    url: "https://guess-dbc0f3.netlify.app",
    github: "https://github.com/Mostafa-Al-Monajjed/Template-One",
  },
  {
    title: "Memory Game",
    category: "JavaScript",
    image: "/images/2.png",
    url: "https://memory-e56cf9.netlify.app",
    github: "https://github.com/Mostafa-Al-Monajjed/Template-Two",
  },
  {
    title: "Hangman Game",
    category: "JavaScript",
    image: "/images/3.png",
    url: "https://hangman-3c14ff.netlify.app",
    github: "https://github.com/Mostafa-Al-Monajjed/Template-Three",
  },
  {
    title: "Special Design",
    category: "JavaScript",
    image: "/images/4.png",
    url: "https://special-design-53bdf0.netlify.app",
    github: "https://github.com/Mostafa-Al-Monajjed/Template-Four",
  },
  {
    title: "Leon Project",
    category: "HTML & CSS",
    image: "/images/5.png",
    url: "https://leon-a256a8.netlify.app",
    github: "https://github.com/Mostafa-Al-Monajjed/Leon-Project",
  },
  {
    title: "Kasper Project",
    category: "HTML & CSS",
    image: "/images/6.png",
    url: "https://kasper-459333.netlify.app",
    github: "https://github.com/Mostafa-Al-Monajjed/Kasper-Project",
  },
  {
    title: "Mustafa World",
    category: "HTML & CSS",
    image: "/images/7.png",
    url: "https://must-world-56d042.netlify.app",
    github: "https://github.com/Mostafa-Al-Monajjed/Mustafa-World",
  },
  {
    title: "Dashboard CSS",
    category: "HTML & CSS",
    image: "/images/8.png",
    url: "https://dashboard-b84824.netlify.app",
    github: "https://github.com/Mostafa-Al-Monajjed/dashboard",
  },
  {
    title: "Admin Dashboard",
    category: "React",
    image: "/images/9.png",
    url: "https://admin-dashboard-pi-bice.vercel.app",
    github: "https://github.com/Mostafa-Al-Monajjed/admin-dashboard",
  },
  {
    title: "World Explorer",
    category: "React",
    image: "/images/10.png",
    url: "https://world-explorer-519233.netlify.app",
    github: "https://github.com/Mostafa-Al-Monajjed/world-explorer",
  },
  {
    title: "My To Do List",
    category: "TypeScript",
    image: "/images/11.png",
    url: "https://todo-list-234.netlify.app",
    github: "https://github.com/Mostafa-Al-Monajjed/To-Do-List",
  },
  {
    title: "Invitation",
    category: "HTML & CSS",
    image: "/images/12.png",
    url: "https://invitation-57c861.netlify.app",
    github: "https://github.com/Mostafa-Al-Monajjed/Invitation",
  },
  {
    title: "Event Platform",
    category: "Next.js",
    image: "/images/13.png",
    url: "https://event-platform-pi-umber.vercel.app",
    github: "https://github.com/Mostafa-Al-Monajjed/event-platform.git",
  },
  {
    title: "Movie Explorer",
    category: "Next.js",
    image: "/images/14.png",
    url: "https://movie-explorer-2026-olive.vercel.app",
    github: "https://github.com/Mostafa-Al-Monajjed/movie-explorer.git",
  },
  {
    title: "Weather App",
    category: "Next.js",
    image: "/images/15.png",
    url: "https://weatherapp-sepia-mu.vercel.app",
    github: "https://github.com/Mostafa-Al-Monajjed/weather-app.git",
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "UI/UX",
];
const categories = [
  "All",
  "React",
  "Next.js",
  "JavaScript",
  "HTML & CSS",
  "TypeScript",
];

export default function Dashboard() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    if (storedTheme) setDark(storedTheme === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    window.localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  }, [dark]);

  const visibleProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Mustafa home">
          <span>MA</span>
          <strong>
            Mustafa<span>.</span>
          </strong>
        </a>
        <nav
          className={menuOpen ? "site-nav open" : "site-nav"}
          aria-label="Main navigation"
        >
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
        <div className="header-actions">
          <button
            className="theme-button"
            onClick={() => setDark((value) => !value)}
            aria-label="Toggle color theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="header-cta" href="#contact">
            Let&apos;s talk <ArrowUpRight size={16} />
          </a>
          <button
            className="menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-container">
          <div className="hero-copy">
            <p className="eyebrow accent-eyebrow">
              FRONTEND DEVELOPER & SOFTWARE ENGINEER
            </p>
            <h1>
              Building digital products <em>people love to use.</em>
            </h1>
            <p className="hero-intro">
              I&apos;m Mustafa Al Munajjed, a frontend developer who turns
              ambitious ideas into fast, accessible, and memorable web
              experiences.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#work">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a className="text-link" href="#contact">
                Get in touch <span>↗</span>
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <i /> Available for new projects
              </span>
              <span>Based in Saudi Arabia · Working worldwide</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <button
              className="hero-image-frame"
              onClick={() => setProfileOpen(true)}
              aria-label="Enlarge profile photo"
            >
              <Image
                src="/me.jpeg"
                alt="Mustafa Al Munajjed"
                width={390}
                height={390}
                priority
              />
            </button>
            <div className="floating-card">
              <Code2 size={18} />
              <span>
                Clean code.
                <br />
                <strong>Thoughtful design.</strong>
              </span>
            </div>
          </div>
        </section>

        <section id="about" className="about-section section-container">
          <div className="section-label">
            01 <span>About me</span>
          </div>
          <div className="about-grid">
            <h2>
              I care about the details that make an experience feel effortless.
            </h2>
            <div>
              <p>
                I&apos;m a self-driven developer with a passion for crafting
                interfaces that are as useful as they are beautiful. From the
                first sketch to the final line of code, I focus on clarity,
                performance, and the people on the other side of the screen.
              </p>
              <a
                className="text-link"
                href="https://github.com/Mostafa-Al-Monajjed/"
                target="_blank"
                rel="noreferrer"
              >
                More about me <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
          <div className="skills-row">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="work" className="work-section section-container">
          <div className="section-heading">
            <div>
              <div className="section-label">
                02 <span>Selected work</span>
              </div>
              <h2>A few things I&apos;ve built.</h2>
            </div>
            <p>
              Each project is an opportunity to solve a problem with purpose and
              personality.
            </p>
          </div>
          <div className="filter-row">
            {categories.map((category) => (
              <button
                className={filter === category ? "selected" : ""}
                key={category}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="projects-grid" key={filter}>
            {visibleProjects.map((project, index) => (
              <article
                className="project-card project-card-enter"
                style={{ animationDelay: `${index * 70}ms` }}
                key={project.title}
              >
                <a
                  className="project-image"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={540}
                    height={304}
                  />
                  <span>
                    View project <ArrowUpRight size={16} />
                  </span>
                </a>
                <div className="project-info">
                  <div>
                    <p>{project.category}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} source code`}
                    >
                      <Github size={18} />
                    </a>
                    {project.linkedin && (
                      <a
                        href={project.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} LinkedIn post`}
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="experience-section section-container"
        >
          <div className="section-label">
            03 <span>Experience</span>
          </div>
          <div className="experience-grid">
            <h2>Growing through every challenge.</h2>
            <div className="timeline">
              <div className="timeline-item">
                <span>2022 — Present</span>
                <div>
                  <h3>Independent Frontend Developer</h3>
                  <p>
                    Designing and developing responsive websites and web
                    applications with React, Next.js, and TypeScript.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <span>Always learning</span>
                <div>
                  <h3>Building better, every day</h3>
                  <p>
                    Exploring new technologies, refining my process, and sharing
                    what I learn through every project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-container">
          <div className="contact-copy">
            <div className="section-label">
              04 <span>Get in touch</span>
            </div>
            <h2>
              Have an idea?
              <br />
              <em>Let&apos;s make it real.</em>
            </h2>
            <p>
              Tell me a little about your project, and let&apos;s start a
              conversation.
            </p>
            <div className="contact-details">
              <a href="mailto:mustafa@example.com">
                <Mail size={17} /> mustafa@example.com
              </a>
              <div>
                <a
                  href="https://github.com/Mostafa-Al-Monajjed/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={17} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mustafa-al-munajjed-b620b4398"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={17} />
                </a>
              </div>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Mustafa Al Munajjed</span>
        <span>Designed & built with intention.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
      {profileOpen && (
        <div
          className="profile-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged profile photo"
          onClick={() => setProfileOpen(false)}
        >
          <div
            className="profile-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="profile-lightbox-close"
              onClick={() => setProfileOpen(false)}
              aria-label="Close enlarged profile photo"
            >
              <X size={21} />
            </button>
            <Image
              src="/me.jpeg"
              alt="Mustafa Al Munajjed"
              width={700}
              height={700}
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
