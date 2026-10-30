import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { projects } from "@/lib/site";
type Project = (typeof projects)[number];
export default function ProjectCard({ project }: { project: Project }) {
  return <Link href={`/projects/${project.slug}`} className="project-card">
    <div className={`project-art art-${project.accent}`}><span className="art-index">{project.number} / SELECTED WORK</span><div className="art-window"><div className="window-dots"><i/><i/><i/></div><div className="art-lines"><b/><b/><b/></div><div className="art-orbit"/></div><span className="art-word">{project.title.split(" ")[0]}</span></div>
    <div className="project-meta"><div><span className="project-category">{project.category} · {project.year}</span><h3>{project.title}</h3></div><span className="project-arrow"><ArrowUpRight size={19}/></span></div>
    <p className="project-summary">{project.summary}</p>
  </Link>;
}
