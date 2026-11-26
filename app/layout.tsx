import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abir Mondal — Software Engineer",
  description: "Abir Mondal is a 2027 Computer Science undergraduate in Kolkata, India, building full-stack applications, backend systems and AI-powered products.",
  openGraph: {
    title: "Abir Mondal — Software Engineer",
    description: "Building software. Exploring intelligence.",
    type: "website",
    images: ["/og-image.svg"]
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
