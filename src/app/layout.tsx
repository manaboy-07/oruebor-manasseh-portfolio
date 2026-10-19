import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Manasseh Oruebor — Full-stack Developer",
    template: "%s | Manasseh Oruebor",
  },
  description:
    "Full-stack developer and AWS Certified Cloud Practitioner. Explore my projects, experience, and journey into cloud engineering.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
