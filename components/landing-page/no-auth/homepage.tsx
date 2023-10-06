import React from "react";
import Image from "next/image";

export function NonAuthenticatedUserHomepage() {
  return (
    <div className="text-blue-400 pt-128 pl-76 flex w-full justify-between max-[755px]:flex-col max-[755px]:gap-[clamp(60px,5vw,72px)] relative z-10">
      <section className="balance">
        <h2 className="blue-text">Generate</h2>
        <h2 className="black-text">Professional</h2>
        <h2 className="black-text">
          Briefs In <span className="blue-text">Minutes </span>
        </h2>
      </section>

      <Image
        src="/images/homepage-system.png"
        fill
        className="!relative aspect-auto !h-500 !w-[clamp(500px,45vw,720px)] flex-grow max-[755px]:!w-full"
        alt="screen image"
      />
    </div>
  );
}
