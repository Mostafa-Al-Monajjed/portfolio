import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Mustafa Al Munajjed | Frontend Developer",
    template: "%s | Mustafa Al Munajjed",
  },
  description: "Mustafa Al Munajjed is a frontend developer specializing in React, Next.js, TypeScript, and accessible user interfaces.",
  keywords: ["Mustafa Al Munajjed", "frontend developer", "React developer", "Next.js", "TypeScript"],
  authors: [{ name: "Mustafa Al Munajjed" }],
  creator: "Mustafa Al Munajjed",
  openGraph: {
    title: "Mustafa Al Munajjed | Frontend Developer",
    description: "Explore Mustafa's projects, skills, and experience building modern web applications.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/me.jpeg", width: 500, height: 500, alt: "Mustafa Al Munajjed" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mustafa Al Munajjed | Frontend Developer",
    description: "React, Next.js, TypeScript, and UI engineering portfolio.",
    images: ["/me.jpeg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
