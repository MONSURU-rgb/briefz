import React from "react";
import Image from "next/image";
import { PlayIcon } from "@/components";

export function NonAuthenticatedUserHomepage() {
  return (
    <div>
      <section className="text-blue-400 pt-128 pl-76 flex w-full justify-between max-[755px]:flex-col max-[755px]:gap-[clamp(60px,5vw,72px)] relative z-10 pr-76">
        <section className="max-w-[650px] zinc-text">
          <h2 className="blue-text">Generate</h2>
          <h2 className="black-text">Professional</h2>
          <h2 className="black-text">
            Briefs In <span className="blue-text">Minutes </span>
          </h2>
          <h3 className="pt-24 text-[var(--zinc-500)] max-w-[600px]">
            Briefz is a dynamic brief generator. It allows designers to easily
            generate design briefs for their project.
          </h3>

          <article className="flex gap-24 pt-60 justify-center max-[343px]:flex-col">
            <button className="action-button bg-[var(--blue-600)] px-32 text-white max-[343px]:w-full items-center justify-center">
              Request brief
            </button>
            <button className="flex items-center justify-center gap-2 action-button px-24 text-[var(--blue-600)] bg-white border-[1px_solid_var(--blue-600)] max-[343px]:w-full">
              <PlayIcon />
              <span>Watch Demo</span>
            </button>
          </article>
        </section>

        <Image
          src="/images/homepage-system.png"
          fill
          className="!relative aspect-auto !h-500 !w-[clamp(500px,45vw,720px)] flex-grow max-[755px]:!w-full"
          alt="screen image"
        />
      </section>
    </div>
  );
}
