"use client";

import { NotSignedInUserHeader } from "@/components";
import "../../../globals.css";
import { MantineProvider } from "@mantine/core";
import { ThemeProvider, useTheme } from "next-themes";

const metadata = {
  title: "Briefz",
  description: " presentational page website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { resolvedTheme } = useTheme();
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black text-white dark:text-black">
        <ThemeProvider
          attribute="class"
          forcedTheme={resolvedTheme || undefined}
        >
          <MantineProvider>
            <NotSignedInUserHeader />
            {children}
          </MantineProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
