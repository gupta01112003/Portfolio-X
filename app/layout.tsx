import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aashish Gupta | Electronics & Computer Science",
  description:
    "Portfolio of Aashish Gupta — software developer, AI enthusiast, and Electronics & Computer Science engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}