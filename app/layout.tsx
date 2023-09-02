import "./globals.css";
// import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import Nav from "@/components/layout/nav";

export const metadata = {
  title: "Portfolio - Vineet",
  description: "to add",
  // "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Precedent - Building blocks for your Next.js project",
  //   description:
  //     "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  //   creator: "@cdr7299",
  // },
  // metadataBase: new URL("https://precedent.dev"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-full w-full bg-gradient-to-br from-indigo-200 via-rose-100 to-cyan-200 dark:bg-slate-700" />
        {/* <div className="fixed h-screen w-full bg-slate-950" /> */}
        {/* <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-950 via-rose-50 to-cyan-900" /> */}
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
