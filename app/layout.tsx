import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import Nav from "@/components/layout/nav";
import { Providers } from "./providers";

export const metadata = {
  title: "Portfolio - Vineet",
  description: "My Portfolio Site",
  themeColor: "#0d1117",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <Providers>
          <div className="fixed h-full w-full bg-gradient-light transition-all duration-500 dark:bg-gradient-dark" />
          <Suspense fallback="...">
            {/* @ts-expect-error Server Component */}
            <Nav />
          </Suspense>
          <main className="flex min-h-screen w-full flex-col items-center justify-center  pt-16">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
