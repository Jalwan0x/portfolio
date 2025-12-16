import "./globals.css";
import type { Metadata } from "next";
import { clsx } from "clsx";

export const metadata: Metadata = {
  title: "Jalwan | Web Penetration Testing",
  description:
    "Know what attackers can do. Before they do it. Manual web application penetration testing by an independent security researcher.",
  metadataBase: new URL("https://www.jalwan.app"),
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "Jalwan | Web Penetration Testing",
    description:
      "Manual web application penetration testing to identify real security weaknesses before attackers do.",
    url: "https://www.jalwan.app",
    siteName: "Jalwan",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jalwan Web Penetration Testing"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Jalwan | Web Penetration Testing",
    description:
      "Manual web application penetration testing to identify real security weaknesses before attackers do.",
    images: ["/og-image.png"],
    site: "@jalwan"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx("dark")}> 
      <body className="bg-base text-text">
        <div className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10 grid-line opacity-40" aria-hidden />
          <div className="absolute inset-0 -z-20 bg-gradient-to-br from-cyan-400/10 via-base to-emerald-500/5" aria-hidden />
          {children}
        </div>
      </body>
    </html>
  );
}
