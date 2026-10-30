import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/lib/site";
export const metadata: Metadata = { title: "Services" };
const process = [{ n: "01", t: "Discover", d: "We discuss your goals, audience, requirements and priorities." }, { n: "02", t: "Plan & design", d: "I shape the structure and visual direction around your needs." }, { n: "03", t: "Build", d: "I develop a responsive, reliable experience and keep you updated." }, { n: "04", t: "Launch", d: "We review, refine and prepare the project for launch." }];
export default function Services() {
  return <><section className="page-hero section-pad"><div className="container"><span className="eyebrow">WHAT I BRING TO THE TABLE</span><h1>Thoughtful work.<br/><span>Practical solutions.</span></h1><p className="page-lead">Flexible web development support to help turn your idea into a useful digital product.</p></div></section>
    <section className="section-pad"><div className="container"><div className="service-cards">{services.map(s=><article className="service-card" key={s.number}><span className="service-number">{s.number}</span><h2>{s.title}</h2><p>{s.text}</p><div className="service-includes"><span><Check size={14}/> Responsive layouts</span><span><Check size={14}/> Clear communication</span><span><Check size={14}/> Quality-focused delivery</span></div></article>)}</div></div></section>
    <section className="soft-section section-pad"><div className="container"><span className="eyebrow">A SIMPLE PROCESS</span><h2 className="section-title">From first chat to <span>launch day.</span></h2><div className="process-grid">{process.map(p=><div key={p.n}><b>{p.n}</b><h3>{p.t}</h3><p>{p.d}</p></div>)}</div></div></section>
    <section className="closing-cta"><div className="container closing-inner"><span className="eyebrow">LET&apos;S TALK ABOUT YOUR IDEA</span><h2>Have a project<br/><span>to discuss?</span></h2><Link href="/contact" className="button button-dark">Get in touch <ArrowUpRight size={17}/></Link></div></section></>;
}
