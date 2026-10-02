import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brixenconsultancy.com"),
  title: {
    default: "Brixen Consultancy — BIM Modeling & CAD Drafting Partner",
    template: "%s — Brixen Consultancy",
  },
  description:
    "A US-based BIM modeling and CAD drafting partner for general contractors, MEP firms and architecture studios. Engineering judgment behind every drawing — aligned to US codes and your title-block standards.",
  keywords: [
    "Brixen Consultancy",
    "BIM modeling",
    "CAD drafting",
    "Revit",
    "AutoCAD",
    "Navisworks",
    "MEP coordination",
    "structural drafting",
    "mechanical design",
    "construction management",
    "Austin",
    "USA",
  ],
  openGraph: {
    title: "Brixen Consultancy — BIM Modeling & CAD Drafting Partner",
    description:
      "Engineering-led BIM & CAD drafting for contractors, MEP firms and architecture studios — USA · UK · UAE · Pakistan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
