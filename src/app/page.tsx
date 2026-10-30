import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Code2, Layers3, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects, services, site } from "@/lib/site";
export default function Home() {
  return <>
    <section className="hero section-pad"><div className="container hero-grid"><div className="hero-copy">
      <div className="availability"><span className="status-dot"/>{site.availability}</div>
      <span className="eyebrow hero-eyebrow">HELLO, I&apos;M {site.owner.toUpperCase()}</span>
      <h1>Building the web,<br/><span>one idea at a time.</span></h1>
      <p className="hero-lead">{site.description}</p>
      <div className="hero-actions"><Link href="/projects" className="button button-dark">Explore my work <ArrowUpRight size={17}/></Link><Link href="/contact" className="text-link">Let&apos;s connect <ArrowRight size={16}/></Link></div>
      <div className="hero-note"><span>BASED IN {site.location.toUpperCase()}</span><span>SCROLL TO EXPLORE <ArrowDown size={13}/></span></div>
    </div><div className="hero-visual"><div className="visual-backdrop"/><div className="visual-card"><div className="visual-top"><span>STZ / 001</span><span>CREATIVE DEVELOPER</span></div><div className="visual-monogram">S<span>.</span></div><div className="visual-bottom"><span>DESIGN MINDED<br/>DEVELOPER</span><span>EST. 2026</span></div></div><div className="floating-chip chip-one"><Code2 size={17}/> Clean code</div><div className="floating-chip chip-two"><Sparkles size={17}/> Thoughtful design</div><div className="visual-caption">DIGITAL CRAFT<br/>WITH PURPOSE ↗</div></div></div></section>
    <section className="intro-strip"><div className="container intro-inner"><span className="eyebrow">WHAT I DO</span><p>I turn ideas into <strong>useful digital experiences</strong> through thoughtful design and dependable development.</p><span className="intro-icon"><Layers3 size={25}/></span></div></section>
    <section className="section-pad"><div className="container"><SectionHeading eyebrow="A FEW RECENT BUILDS" title="Selected work" text="A selection of projects and experiments. Each one is an opportunity to solve a problem and make something useful."/><div className="project-grid">{projects.map(p=><ProjectCard key={p.slug} project={p}/>)}</div><div className="center-action"><Link href="/projects" className="button button-outline">View all projects <ArrowUpRight size={17}/></Link></div></div></section>
    <section className="services-preview section-pad"><div className="container services-layout"><div><SectionHeading eyebrow="HOW I CAN HELP" title="Good ideas deserve great execution." text="From the first sketch to the final deployment, I can help bring your next web project to life."/></div><div className="service-list">{services.slice(0,3).map(s=><div className="service-row" key={s.number}><span>{s.number}</span><div><h3>{s.title}</h3><p>{s.text}</p></div><ArrowUpRight size={18}/></div>)}<Link href="/services" className="text-link">Explore services <ArrowRight size={16}/></Link></div></div></section>
    <section className="closing-cta"><div className="container closing-inner"><span className="eyebrow">HAVE SOMETHING IN MIND?</span><h2>Let&apos;s build your<br/><span>next big thing.</span></h2><Link href="/contact" className="button button-dark">Start a conversation <ArrowUpRight size={17}/></Link></div></section>
  </>;
}
