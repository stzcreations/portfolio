import type { Metadata } from "next";
import { ArrowUpRight, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "Contact" };
export default function Contact() {
  return <section className="section-pad page-section"><div className="container contact-layout"><div className="contact-intro"><span className="eyebrow">GET IN TOUCH</span><h1>Let&apos;s make<br/><span>it happen.</span></h1><p className="page-lead">Have a project, an idea or just want to say hello? My inbox is open.</p><div className="contact-detail"><MapPin size={18}/><span>{site.location}</span></div><div className="contact-detail"><span className="status-dot"/><span>{site.availability}</span></div><div className="social-links">{site.socials.map(s=><a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label} <ArrowUpRight size={14}/></a>)}</div></div><ContactForm/></div></section>;
}
