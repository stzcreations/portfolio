import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound() { return <section className="not-found"><span className="eyebrow">404 / PAGE NOT FOUND</span><h1>Looks like this<br/><span>page wandered off.</span></h1><p>The page you&apos;re looking for doesn&apos;t exist or may have moved.</p><Link href="/" className="button button-dark"><ArrowLeft size={16}/> Back to home</Link></section>; }
