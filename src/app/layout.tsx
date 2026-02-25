import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeWithAsh Store",
  description: "Full-stack e-commerce demo — Next.js, Supabase, Stripe & cart. By Code with Ash.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
