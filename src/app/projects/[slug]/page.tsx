import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/site";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const project = projects.find(p => p.slug === slug);
  return { title: project ? project.title : "Project not found", description: project?.summary };
}
export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params; const project = projects.find(p => p.slug === slug);
  if (!project) notFound();
  return <section className="section-pad page-section"><div className="container detail-container"><Link href="/projects" className="back-link"><ArrowLeft size={16}/> All projects</Link><div className={`detail-art art-${project.accent}`}><span className="art-index">{project.number} / {project.category.toUpperCase()}</span><div className="detail-art-title">{project.title}</div><span className="detail-year">{project.year}</span></div><span className="eyebrow">{project.category} · {project.year}</span><h1 className="detail-title">{project.title}</h1><p className="detail-summary">{project.summary}</p><div className="detail-content"><div><h2>Overview</h2><p>{project.description}</p></div><aside><h3>Technologies</h3><div className="tag-list">{project.stack.map(s=><span className="tag" key={s}>{s}</span>)}</div><div className="detail-links">{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live website <ArrowUpRight size={15}/></a>}<a href={project.github} target="_blank" rel="noreferrer"><Github size={15}/> GitHub profile/repository <ArrowUpRight size={15}/></a></div></aside></div></div></section>;
}
