import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-display" });
export const metadata: Metadata = {
  title: { default: "STZ Creations — Developer Portfolio", template: "%s | STZ Creations" },
  description: "Explore the work, skills and services of STZ Creations — web developer based in Bangladesh.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  openGraph: { title: "STZ Creations — Developer Portfolio", description: "Thoughtful websites and digital experiences.", type: "website" }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${dmSans.variable} ${manrope.variable}`}><Header/><main>{children}</main><Footer/></body></html>;
}
