import { Galaclock } from "@/components";
import { InfoCircle, TableDocument } from "iconsax-react";

export function HowItWorks() {
  return (
    <div className="flex flex-col px-80 pb-80">
      <h2 className="font-poppins dark:text-white text-[var(--blue-gray-900)] py-80 text-center font-bold text-40/[48px]">
        How it works
      </h2>
      <section className="cards flex md:justify-between md:gap-8 flex-wrap md:flex-nowrap justify-center gap-5">
        <article className="card flex flex-col gap-4 justify-center items-center rounded-[9.5px] p-30 max-w-[350px]">
          <Galaclock />
          <h4 className="font-bold font-poppins text-18/8 text-[var(--blue-gray-900)] dark:text-[var(--blue-600)]">
            Timely
          </h4>
          <p className="font-poppins font-normal text-18/7 text-[var(--blue-gray-900)] text-center dark:text-[var(--blue-600)]">
            Include details about your project goals, timelines and any other
            specific requirement needed.
          </p>
        </article>
        <article className="card flex flex-col gap-4 justify-center items-center rounded-[9.5px] p-30 max-w-[350px]">
          <InfoCircle size="50" color="#2563EB" />
          <h4 className="font-bold font-poppins text-18/8 text-[var(--blue-gray-900)] dark:text-[var(--blue-600)]">
            Data Processing
          </h4>
          <p className="font-poppins font-normal text-18/7 text-[var(--blue-gray-900)] text-center dark:text-[var(--blue-600)]">
            The brief generator analyzes and processes the input data to extract
            relevant information that matches your interest.
          </p>
        </article>
        <article className="card flex flex-col gap-4 justify-center items-center rounded-[9.5px] p-30 max-w-[350px]">
          <TableDocument size="50" color="#2563EB" />
          <h4 className="font-bold font-poppins text-18/8 text-[var(--blue-gray-900)] dark:text-[var(--blue-600)]">
            Storage
          </h4>
          <p className="font-poppins font-normal text-18/7 text-[var(--blue-gray-900)] text-center dark:text-[var(--blue-600)]">
            The generated brief can be saved, stored and shared with team
            members or stakeholders.
          </p>
        </article>
      </section>
    </div>
  );
}
