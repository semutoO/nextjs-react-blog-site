import Footer from "@/app/_components/footer";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "./_components/theme-switcher";

import "./globals.css";
import Container from "./_components/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `A title to use for your OpenGraph metadata`,
  description: `A description about your site that is used with OpenGraph Metadata.`,
  openGraph: {
    type: "website",
    images: [HOME_OG_IMAGE_URL]    
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>        
      </head>
      <body
        className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
      >    
      <ThemeSwitcher />  
        <div className="min-h-screen">
          <Container>            
            {children}
          </Container>
          </div>
        <Footer />
      </body>
    </html>
  );
}
