"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: any }) {
  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
      defaultTheme="light"
    >
      {children}
    </ThemeProvider>
  );
}
