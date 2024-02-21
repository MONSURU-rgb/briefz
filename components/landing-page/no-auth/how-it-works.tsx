import { Galaclock } from "@/components";
import { InfoCircle, TableDocument } from "iconsax-react";

export function HowItWorks() {
  return (
    <div className="flex flex-col px-80 pb-80">
      <h2 className="font-poppins dark:text-white text-[var(--blue-gray-900)] py-80 text-center font-bold text-40/[48px]">
        How it works
      </h2>
      <section className="cards flex md:justify-between md:gap-8 flex-wrap md:flex-nowrap justify-center gap-5">
        <Card
          title="Timely"
          description="Include details about your project goals, timelines and any other specific requirement needed."
          icon={<Galaclock />}
        />
        <Card
          title="Data Processing"
          description="The brief generator analyzes and processes the input data to extract relevant information that matches your interest."
          icon={<InfoCircle size="50" color="#2563EB" />}
        />
        <Card
          title="Storage"
          description="The generated brief can be saved, stored and shared with team members or stakeholders."
          icon={<TableDocument size="50" color="#2563EB" />}
        />
      </section>
    </div>
  );
}

function Card({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: JSX.Element;
}) {
  return (
    <article className="card flex flex-col gap-4 justify-center items-center rounded-[9.5px] p-30 max-w-[350px]">
      {icon}
      <h4 className="font-bold font-poppins text-18/8 text-[var(--blue-gray-900)] dark:text-[var(--blue-600)]">
        {title}
      </h4>
      <p className="font-poppins font-normal text-18/7 text-[var(--blue-gray-900)] text-center dark:text-[var(--blue-600)]">
        {description}
      </p>
    </article>
  );
}
