import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/site";
export const metadata: Metadata = { title: "Projects" };
export default function Projects() {
  return <section className="section-pad page-section"><div className="container"><span className="eyebrow">THE WORK SO FAR</span><h1 className="page-title">Projects & <span>experiments.</span></h1><p className="page-lead">A collection of selected builds, ideas and things I&apos;ve enjoyed working on.</p><div className="project-grid project-grid-page">{projects.map(p=><ProjectCard key={p.slug} project={p}/>)}</div><p className="small-note">Some entries are starter portfolio examples. Replace sample content and links with verified project details before publishing.</p></div></section>;
}
