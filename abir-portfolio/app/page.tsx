"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowDownRight, ArrowUpRight, Braces, Check,
  Code2, Database, Download, Github, Globe2, Linkedin, Mail, Menu, Server,
  Sparkles, Terminal, X, Zap
} from "lucide-react";

const profile = {
  name: "Abir Mondal",
  role: "Software Engineer · AI Engineering",
  location: "Kolkata, West Bengal, India",
  graduation: "B.Tech CSE · 2027",
  email: "abirmondal7864@gmail.com",
  github: "https://github.com/abirmondal7864",
  linkedin: "https://www.linkedin.com/in/abirmondal7864/",
};

const skills = [
  { group: "Languages", icon: Code2, items: ["Java", "Python", "JavaScript", "SQL"] },
  { group: "Frontend", icon: Braces, items: ["React.js", "HTML5", "CSS3"] },
  { group: "Backend", icon: Server, items: ["FastAPI", "Node.js", "Express.js", "REST APIs", "JWT", "SQLAlchemy"] },
  { group: "Data & migrations", icon: Database, items: ["PostgreSQL", "MongoDB", "Alembic"] },
  { group: "AI & engineering tools", icon: Sparkles, items: ["Generative AI", "Gemini API", "RAG", "Agentic AI", "Docker", "GitHub Actions", "Postman", "Vercel", "Render"] }
];

const projects = [
  {
    number: "01", name: "AI Career Copilot", type: "AI-powered career platform", featured: true,
    description: "A career development platform that turns a resume and career profile into actionable guidance — with AI-powered analysis, readiness scoring, skill-gap detection and a personalized roadmap.",
    stack: ["React", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Gemini API", "Docker"],
    repo: "https://github.com/abirmondal7864/ai-career-copilot",
    demo: "https://ai-career-copilot-six-plum.vercel.app/",
    visual: "career"
  },
  {
    number: "02", name: "Expense Tracker", type: "Full-stack finance application", featured: false,
    description: "A full-stack application for managing income and expenses, organizing transactions and understanding spending through category-based analytics and visual reports.",
    stack: ["MongoDB", "Express", "React", "Node.js", "TypeScript", "JWT", "Chart.js"],
    repo: "https://github.com/abirmondal7864/expense-tracker",
    demo: "https://expense-tracker-xi-blue-21.vercel.app/",
    visual: "expense"
  }
];

function ProjectVisual({ kind }: { kind: string }) {
  if (kind === "career") return (
    <div className="mock-window career-window" aria-label="Decorative preview of the AI Career Copilot dashboard">
      <div className="mock-top"><span className="mock-dots"><i/><i/><i/></span><span className="mock-address">career-copilot / dashboard</span><span className="mock-avatar">A</span></div>
      <div className="mock-body"><div className="mock-sidebar"><b>◈</b><span className="active"/><span/><span/><span/></div><div className="mock-content"><div className="mock-eyebrow">CAREER OVERVIEW</div><div className="mock-heading">Your career snapshot</div><div className="mock-metrics"><div className="metric-card"><small>Readiness score</small><strong>82<span>/100</span></strong><div className="metric-line"><i/></div></div><div className="metric-card"><small>Skills identified</small><strong>14</strong><em>Across 4 categories</em></div></div><div className="mock-lower"><div className="mock-panel"><small>SKILL ALIGNMENT</small><div className="skill-row"><span>Frontend</span><i><b style={{width:"82%"}}/></i></div><div className="skill-row"><span>Backend</span><i><b style={{width:"68%"}}/></i></div><div className="skill-row"><span>AI / ML</span><i><b style={{width:"48%"}}/></i></div></div><div className="mock-panel roadmap"><small>NEXT RECOMMENDATION</small><b>Build an AI project</b><span>Strengthen applied AI skills</span></div></div></div></div>
    </div>
  );
  return (
    <div className="mock-window expense-window" aria-label="Decorative preview of the Expense Tracker dashboard">
      <div className="mock-top"><span className="mock-dots"><i/><i/><i/></span><span className="mock-address">expense-tracker / overview</span><span className="mock-avatar green">A</span></div>
      <div className="expense-body"><div className="mock-eyebrow">YOUR FINANCES</div><div className="mock-heading">Monthly overview</div><div className="expense-total"><small>Total balance</small><strong>₹ 24,580.00</strong><span>↗ 12.8% this month</span></div><div className="expense-chart"><div className="chart-labels"><span>INCOME</span><span>EXPENSES</span></div><div className="bars">{[42,66,50,78,58,88,64,74,48,92,70,82].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div><div className="chart-months"><span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span></div></div></div>
    </div>
  );
}

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="32" y="43" textAnchor="middle" fill="#e6dcff" fontFamily="Arial, sans-serif" fontSize="23" fontWeight="800" letterSpacing="-2">AM</text>
      </svg>
    </span>
  );
}

function SectionHeading({ index, eyebrow, title, note }: { index: string; eyebrow: string; title: string; note?: string }) {
  return <div className="section-heading"><div><span className="section-index">{index} / {eyebrow}</span><h2>{title}</h2></div>{note && <p>{note}</p>}</div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const nav = [{label:"About",href:"#about"},{label:"Skills",href:"#skills"},{label:"Projects",href:"#projects"},{label:"Journey",href:"#journey"}];
  return (
    <main>
      <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
      <header className="site-header"><a className="brand" href="#top" aria-label="Abir Mondal home"><BrandMark /><span>ABIR MONDAL</span></a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>{nav.map(item=><a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>)}<a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={14}/></a></nav>
        <button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label={menuOpen?"Close menu":"Open menu"}>{menuOpen?<X/>:<Menu/>}</button>
      </header>

      <section className="hero section-wrap" id="top">
        <motion.div className="hero-copy" initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
          <div className="availability"><span className="availability-dot"/> OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES</div>
          <p className="hero-kicker">Hey, I'm {profile.name.split(" ")[0]} —</p>
          <h1>Building software<span className="title-period">.</span><br/><span className="muted-title">Exploring intelligence.</span></h1>
          <p className="hero-description">I build full-stack applications, backend systems and AI-powered products. I enjoy turning practical problems into useful, reliable software.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17}/></a><a className="button button-quiet" href="/resume.pdf" target="_blank" rel="noreferrer">Resume <Download size={16}/></a></div>
          <div className="hero-meta"><span><Globe2 size={14}/> {profile.location}</span><span className="meta-divider"/><span>{profile.graduation}</span></div>
        </motion.div>
        <motion.div className="hero-art" initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.15}}>
          <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/><div className="hero-core"><span className="core-monogram">AM</span><span className="core-caption">SOFTWARE<br/>ENGINEERING</span></div>
          <div className="float-chip chip-code"><Code2 size={15}/> Clean code</div><div className="float-chip chip-ai"><Sparkles size={15}/> Applied AI</div><div className="float-chip chip-api"><Terminal size={15}/> Backend systems</div>
          <div className="art-caption"><span>01 — 03</span><span>CURIOUS BY DEFAULT</span></div>
        </motion.div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14}/></a>
      </section>

      <section className="about-section section-wrap" id="about"><SectionHeading index="01" eyebrow="A LITTLE ABOUT ME" title="Engineer by mindset." note="Computer Science student. Builder at heart. Always learning."/><div className="about-grid"><div className="about-lead"><p>I'm a Computer Science undergraduate at <strong>Kalyani Government Engineering College</strong>, graduating in 2027.</p><p>My work sits at the intersection of <strong>software engineering and applied AI</strong>. I like understanding how systems work end-to-end — from a thoughtful interface to the API, data model and deployment behind it.</p></div><div className="about-aside"><div className="aside-line"><span>FOCUS</span><strong>Full-stack · Backend · AI</strong></div><div className="aside-line"><span>EDUCATION</span><strong>B.Tech, Computer Science</strong></div><div className="aside-line"><span>BASED IN</span><strong>India</strong></div><div className="aside-line"><span>CURRENTLY</span><strong>Building & learning</strong></div></div></div></section>

      <section className="skills-section section-wrap" id="skills"><SectionHeading index="02" eyebrow="MY TOOLKIT" title="Tools I work with." note="A practical stack built through projects, coursework and continuous practice."/><div className="skills-grid">{skills.map((group,i)=>{const Icon=group.icon;return <motion.div className="skill-card" key={group.group} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{delay:i*.06}}><div className="skill-card-top"><span className="skill-icon"><Icon size={17}/></span><span className="skill-count">0{i+1}</span></div><h3>{group.group}</h3><div className="skill-tags">{group.items.map(item=><span key={item}>{item}</span>)}</div></motion.div>})}</div></section>

      <section className="projects-section section-wrap" id="projects"><SectionHeading index="03" eyebrow="SELECTED WORK" title="Things I've built." note="A couple of projects where I turned ideas into working software."/><div className="projects-list">{projects.map((project,i)=><motion.article className={`project-card ${project.featured?"featured":""}`} key={project.name} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.55,delay:i*.08}}><div className="project-visual"><ProjectVisual kind={project.visual}/><span className="visual-label">{project.number} / PROJECT</span></div><div className="project-info"><div className="project-topline"><span>{project.type}</span>{project.featured&&<span className="featured-label"><Sparkles size={12}/> FEATURED</span>}</div><h3>{project.name}</h3><p>{project.description}</p><div className="project-stack">{project.stack.map(tag=><span key={tag}>{tag}</span>)}</div><div className="project-links"><a href={project.repo} target="_blank" rel="noreferrer">Source code <Github size={15}/></a><a href={project.demo} target="_blank" rel="noreferrer">Live application <ArrowUpRight size={15}/></a></div></div></motion.article>)}</div></section>

      <section className="journey-section section-wrap" id="journey"><SectionHeading index="04" eyebrow="THE JOURNEY SO FAR" title="Learning by doing." note="A few milestones that reflect how I learn, build and contribute."/><div className="timeline"><div className="timeline-item"><span className="timeline-dot"/><div className="timeline-date">SEP 2023 — JUN 2027</div><div className="timeline-content"><h3>B.Tech — Computer Science & Engineering</h3><p>Kalyani Government Engineering College</p><span className="timeline-detail">CGPA: 7.6 / 10.0 · Coursework: DSA, OOP, DBMS, Operating Systems and Computer Networks.</span></div></div><div className="timeline-item"><span className="timeline-dot"/><div className="timeline-date">AUG 2025 — SEP 2025</div><div className="timeline-content"><h3>Java Developer Intern</h3><p>Pinnacle Labs</p><span className="timeline-detail">Developed Flight Booking and Library Management command-line applications in Core Java, using CSV persistence, CRUD workflows, file I/O, exception handling and OOP principles.</span></div></div><div className="timeline-item"><span className="timeline-dot"/><div className="timeline-date">JUL 2025 — AUG 2025</div><div className="timeline-content"><h3>Open Source Contributor</h3><p>Open Source Connect India · NotesVault</p><span className="timeline-detail">Fixed a dashboard UI overflow issue with a CSS layout correction. Contributed merged Pull Request #869.</span></div></div><div className="timeline-item"><span className="timeline-dot"/><div className="timeline-date">CERTIFICATIONS & LEARNING</div><div className="timeline-content"><h3>AI Agent Development</h3><p>Google Skills · IBM</p><span className="timeline-detail">Engineer AI Agents with Agent Development Kit (ADK) — Google Skills; Build an AI Agent — IBM.</span></div></div></div><div className="learning-strip"><div><Zap size={17}/><span>Problem solving</span></div><span>200+ problems solved across LeetCode and other coding platforms</span><span className="learning-separator"/><div><Check size={16}/><span>Consistent project building</span></div></div></section>

      <section className="contact-section section-wrap" id="contact"><div className="contact-panel"><div className="contact-glow"/><div className="contact-content"><span className="section-index">05 / WHAT'S NEXT</span><h2>Have something<br/><span className="muted-title">interesting in mind?</span></h2><p>I'm open to connecting about software engineering opportunities, interesting projects and ideas worth building.</p><div className="hero-actions"><a className="button button-primary" href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={17}/></a><a className="button button-quiet" href={`mailto:${profile.email}`}>Email me <Mail size={16}/></a></div></div><div className="contact-decoration"><div className="contact-symbol">↗</div><span>LET'S BUILD<br/>SOMETHING USEFUL</span></div></div></section>

      <footer className="site-footer section-wrap"><a className="brand" href="#top"><BrandMark /><span>ABIR MONDAL</span></a><span className="footer-note">Designed & built with intent.</span><div className="footer-links"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17}/></a></div><span className="copyright">© {new Date().getFullYear()} Abir Mondal</span></footer>
    </main>
  );
}
