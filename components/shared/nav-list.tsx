import { noAuthNavList } from "@/data";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Navigation {
  sectionclass?: string;
  ulclass?: string;
  articleclass?: string;
}

export default function NavList({
  sectionclass,
  ulclass,
  articleclass,
}: Navigation) {
  const pathname = usePathname();
  return (
    <section className={clsx("flex gap-45 max-mobile:hidden", sectionclass)}>
      <ul className={clsx("flex gap-32 flex-center", ulclass)}>
        {noAuthNavList.map(({ text, path }: { text: string; path: string }) => (
          <li
            key={text}
            className={clsx(
              "list-class",
              path === pathname ? "text-[#2563eb]" : "text-[#18181B]"
            )}>
            <Link href="/">{text}</Link>
          </li>
        ))}
      </ul>

      <article className={clsx("flex-center gap-16", articleclass)}>
        <button className="login-button text-[var(--blue-600)]">Login</button>
        <button className="sign-button whitespace-nowrap">Sign Up</button>
      </article>
    </section>
  );
}
