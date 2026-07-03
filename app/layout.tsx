import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "KR Funverse | Go Karting, Box Cricket & Indoor Games in Hyderabad",
    template: "%s | KR Funverse",
  },
  description:
    "Hyderabad's premium entertainment destination. Experience Go Karting, Box Cricket, and Indoor Games at KR Funverse in Ghatkesar. Book your adventure today!",
  openGraph: {
    title: "KR Funverse | Race. Play. Repeat.",
    description:
      "Hyderabad's most exciting entertainment destination — Go Karting, Box Cricket & Indoor Games.",
    url: "https://krfunverse.com",
    siteName: "KR Funverse",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="antialiased">
      <body className="min-h-dvh flex flex-col bg-background text-white">
        {children}
      </body>
    </html>
  );
}
