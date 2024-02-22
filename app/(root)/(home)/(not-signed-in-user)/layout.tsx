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
  const { themes } = useTheme();
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black text-white dark:text-black">
        <ThemeProvider attribute="class" themes={["dark", "light"]}>
          <MantineProvider>
            <NotSignedInUserHeader />
            {children}
          </MantineProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
