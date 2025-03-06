import { metadata } from "@/docs/projects.mdx";
import Link from "next/link";

export function Projects() {
  return (
    <section className="mt-20">
      <h1 className="p-4 text-xl font-bold">개인 프로젝트</h1>
      <div className="flex flex-col">
        <div className="border-y-2 border-y-black">
          <div className="flex gap-5 border-b-2 border-b-zinc-100 p-4 text-xl">
            {/*<h1 className="w-32 font-bold">{digitalNutritionMetadata.company}</h1>*/}
            {/*<p className="text-zinc-500">{digitalNutritionMetadata.description}</p>*/}
          </div>
          <div className="my-4 flex gap-5 px-4">
            {/*<div className="flex flex-wrap gap-2">*/}
            {/*  {digitalNutritionMetadata.techStack.map((tech, index) => (*/}
            {/*    <TooltipProvider key={index} delayDuration={0}>*/}
            {/*      <Tooltip>*/}
            {/*        <TooltipTrigger>*/}
            {/*          <div className="flex items-center gap-2 rounded-lg bg-zinc-100 p-2">*/}
            {/*            <Image className="z-50" src={`${tech}.svg`} alt={tech} width={20} height={20} />*/}
            {/*            <p className="text-xs font-semibold">{kebabToPascal(tech)}</p>*/}
            {/*          </div>*/}
            {/*        </TooltipTrigger>*/}
            {/*      </Tooltip>*/}
            {/*    </TooltipProvider>*/}
            {/*  ))}*/}
            {/*</div>*/}
          </div>
        </div>
        <div className="my-4 flex flex-col">
          {metadata.projects.map((project, index) => (
            <Project key={index} title={project.name} descriptions={project.description} period={project.period} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ProjectProps = {
  title: string;
  descriptions: string[];
  period: string;
};

function Project({ title, descriptions, period }: ProjectProps) {
  return (
    <article className="group relative grid h-full grid-cols-12 divide-x-2 divide-black">
      <div className="col-span-2 h-full py-4">
        <time className="items -center flex justify-center text-sm" dateTime="2022-09-05">
          {/*<span className="flex items-center" aria-hidden="true">*/}
          {/*  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>*/}
          {/*</span>*/}
          {period}
        </time>
      </div>
      <div className="col-span-12 col-start-3 h-full py-4 pl-4">
        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          {/*<div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>*/}
          <Link href="/docs/digital-nutrition">
            <span className="relative z-10">{title}</span>
          </Link>
        </h2>

        <ul className="list-disc">
          {descriptions.map((description, index) => (
            <li key={index} className="mt-2 ml-4 text-base text-wrap text-zinc-600 dark:text-zinc-400">
              {description}
            </li>
          ))}
        </ul>
        {/*<div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium">*/}
        {/*  자세히*/}
        {/*  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">*/}
        {/*    <path*/}
        {/*      d="M6.75 5.75 9.25 8l-2.5 2.25"*/}
        {/*      stroke-width="1.5"*/}
        {/*      stroke-linecap="round"*/}
        {/*      stroke-linejoin="round"*/}
        {/*    ></path>*/}
        {/*  </svg>*/}
        {/*</div>*/}
      </div>
    </article>
  );
}
