import Link from "next/link";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { site } from "@/lib/site";
export default function Footer() {
  return <footer className="footer"><div className="container"><div className="footer-top">
    <div><span className="eyebrow">HAVE A PROJECT IN MIND?</span><h2>Let&apos;s make<br/><span>something great.</span></h2></div>
    <Link className="round-link" href="/contact" aria-label="Contact me"><ArrowUpRight size={28}/></Link>
  </div><div className="footer-bottom"><Link href="/" className="brand"><span className="brand-mark">S.</span><span>STZ<span className="brand-light"> Creations</span></span></Link><span>© {new Date().getFullYear()} STZ Creations. Built with care.</span><div className="footer-social"><a href={site.socials[0].href} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href={site.socials[1].href} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a></div></div></div></footer>;
}
