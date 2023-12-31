"use client";

import React from "react";
import { HeroSection } from "./hero-section";
import { AstromLogo, MetabluIcon } from "@/components";
import { useTheme } from "next-themes";

export function NonAuthenticatedUserHomepage() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <HeroSection />
      <section className="pt-120 flex flex-col gap-80">
        <h2 className="text-[var(--blue-gray-900)] font-poppins text-[clamp(30px,3.6vw,56px)] dark:text-white text-center">
          Our Top Partners
        </h2>

        <article className="scroll-container">
          <figure className="flex gap-120">
            {Array.from({ length: 20 }).map((_, i) => (
              <AstromLogo
                color={theme == "light" ? "#0f172a" : "white"}
                key={i}
              />
            ))}
          </figure>
        </article>
        <article className="scroll-container">
          <figure className="flex gap-260">
            {Array.from({ length: 20 }).map((_, i) => (
              <MetabluIcon
                color={theme == "light" ? "#0f172a" : "white"}
                key={i}
              />
            ))}
          </figure>
        </article>
      </section>
    </div>
  );
}
