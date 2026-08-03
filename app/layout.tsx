import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import "@/app/globals.css";

export const metadata = {
  title: "Augusto Manuel | Frontend Developer",
  description:
    "Portfólio de Augusto Manuel - Frontend Developer especializado em React, Next.js, Vue.js e TypeScript.",
};

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={cn("font-sans", geist.variable)}>
      <body>
        <main> {children}</main>
      </body>
    </html>
  );
}
