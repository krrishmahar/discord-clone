import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ui/providers/theme-providers";
import { cn } from "@/lib/utils";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord App",
  description: "an discord app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
      <ThemeProvider attribute="class"  defaultTheme="dark"  storageKey="discord-theme">
        <body className={`${cn(font.className,
          "bg-white dark:bg-[#151515]" 
         )} antialiased`}>{children}</body>
      </ThemeProvider>
      </html>
    </ClerkProvider>
  );
}
