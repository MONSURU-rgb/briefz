import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PlayIcon } from "@/components";
import ReactTextTransition, { presets } from "react-text-transition";

// Creating a wobbly spring preset using React text transition package

export function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const texts = ["Minutes.", "No Time", "A Flash"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => {
        if (prevIndex === texts.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 5000);

    return () => clearInterval(interval); // Clear the interval on unmount
  }, []);

  return (
    <section className="text-blue-400 pt-128 pl-76 flex w-full justify-between max-[755px]:flex-col max-[755px]:gap-[clamp(60px,5vw,72px)] relative z-10 overflow-hidden">
      <section className="max-w-[650px] zinc-text pr-76">
        <h2 className="blue-text">Generate</h2>
        <h2 className="black-text">Professional</h2>
        <h2 className="black-text">
          Briefs In{" "}
          <span className="blue-text">
            <ReactTextTransition inline springConfig={presets.gentle}>
              {texts[currentTextIndex]}
            </ReactTextTransition>
          </span>
        </h2>
        <h3 className="pt-24 text-[var(--zinc-500)] max-w-[600px]">
          Briefz is a dynamic brief generator. It allows designers to easily
          generate design briefs for their project.
        </h3>

        <article className="flex gap-24 pt-60 justify-start max-[343px]:flex-col">
          <button className="action-button bg-[var(--blue-600)] bg-opacity-1  duration-300 px-32 text-white max-[343px]:w-full items-center justify-center hover:bg-[var(--dark-blue-600)] hover:ease-out">
            Request brief
          </button>
          <button className="flex items-center justify-center gap-2 action-button px-24 text-[var(--blue-600)] bg-white border border-[var(--blue-600)] max-[343px]:w-full">
            <PlayIcon />
            <span>Watch Demo</span>
          </button>
        </article>
      </section>
      <figure>
        <Image
          src="/images/homepage-system.png"
          fill
          className="!relative aspect-auto !h-500 !w-[clamp(500px,45vw,720px)] flex-grow max-[755px]:!w-full max-[500px]:!hidden"
          alt="screen image"
        />
        <Image
          src="/images/mobile-image-for-brief-generator.png"
          fill
          className="!relative hidden aspect-auto flex-grow max-[755px]:!w-full max-[500px]:!block object-cover"
          alt="screen image"
        />
      </figure>
    </section>
  );
}
