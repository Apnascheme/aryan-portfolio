import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Aryan Mange Portfolio",
  description: "Portfolio of Aryan Mange, a Mumbai-based developer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
