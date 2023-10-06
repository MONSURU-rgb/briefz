// "use client"  path === pathname ? "#2563eb" : "#18181B",;
"use client";

import React from "react";
import { BZHeader } from "..";
import { clsx } from "clsx";
import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NavList from "./nav-list";
import LightDark from "./light-dark";

export const NotSignedInUserHeader = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <header className="py-32 px-80 first-header relative">
      <BZHeader />

      <div className="flex gap-4 items-center justify-center">
        <section className="flex gap-3 items-center">
          <LightDark />
          <Burger
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
            className="!hidden max-mobile:!block"
          />
          {opened && (
            <NavList
              sectionclass={clsx(
                "hidden flex-col max-mobile:!flex gap-24 absolute top-[70px] bg-[var(--bg-header)] p-6 right-0 backdrop-blur-md z-50"
              )}
              articleclass="flex-col"
              ulclass="flex-col"
            />
          )}
        </section>
        <NavList sectionclass="max-mobile:hidden" />
      </div>
    </header>
  );
};