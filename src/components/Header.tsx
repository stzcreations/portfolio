 "use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links = [{ href: "/", label: "Home" }, { href: "/about", label: "About" }, { href: "/projects", label: "Projects" }, { href: "/services", label: "Services" }, { href: "/contact", label: "Contact" }];
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="container nav-wrap">
    <Link href="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">S.</span><span>STZ<span className="brand-light"> Creations</span></span></Link>
    <button className="mobile-toggle" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X size={21}/> : <Menu size={21}/>}</button>
    <nav className={open ? "main-nav nav-open" : "main-nav"}>{links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)) ? "nav-link active" : "nav-link"}>{link.label}</Link>)}</nav>
    <Link href="/contact" className="nav-cta">Let&apos;s talk <ArrowUpRight size={15}/></Link>
  </div></header>;
}
