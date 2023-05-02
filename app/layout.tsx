import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "./ui/Navbar/Navbar";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dopamira",
  description: "=The one stop for buying accessories for her",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(inter.className, "px-2 py-4 text-4xl bg-slate-900")}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
