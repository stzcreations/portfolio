 "use client";
import { useState } from "react";
import { ArrowUpRight, Copy, Mail } from "lucide-react";
import { site } from "@/lib/site";
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [copied, setCopied] = useState(false);
  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = `Hi ${site.owner},%0D%0A%0D%0A${encodeURIComponent(form.message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(form.name)} (${encodeURIComponent(form.email)})`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(form.subject || "Project enquiry")}&body=${body}`;
  };
  const copyEmail = async () => { await navigator.clipboard.writeText(site.email); setCopied(true); window.setTimeout(() => setCopied(false), 1800); };
  return <div className="contact-form-wrap"><form className="contact-form" onSubmit={submit}>
    <div className="form-row"><label>Your name<input name="name" value={form.name} onChange={update} placeholder="John Doe" required/></label><label>Email address<input name="email" type="email" value={form.email} onChange={update} placeholder="john@example.com" required/></label></div>
    <label>Subject<input name="subject" value={form.subject} onChange={update} placeholder="What would you like to build?"/></label>
    <label>Your message<textarea name="message" value={form.message} onChange={update} placeholder="Tell me a little about your project..." rows={6} required/></label>
    <button className="button button-dark form-submit" type="submit">Open email to send <ArrowUpRight size={17}/></button>
    <p className="form-note">This opens your default email app with your message prepared. Nothing is sent until you press Send.</p>
  </form><div className="email-direct"><span>OR EMAIL ME DIRECTLY</span><div><Mail size={18}/><a href={`mailto:${site.email}`}>{site.email}</a><button type="button" onClick={copyEmail} aria-label="Copy email"><Copy size={15}/>{copied ? "Copied" : "Copy"}</button></div></div></div>;
}
