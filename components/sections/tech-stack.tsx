import { IconCloud } from "@/components/magicui/icon-cloud"
import { TechTabs } from "../tech-tabs"
import { learningTechs, techs } from "@/data/tech-stack"

export function TechStack() {
  const images = [...techs, ...learningTechs]
    .flatMap((techChunk) => techChunk.map((tech) => tech))
    .filter((tech) => !!tech.slug)
    .map((tech) => `https://cdn.simpleicons.org/${tech.slug}/${tech.slug}`)

  return (
    <section
      id="tech"
      className="w-full mx-auto max-w-4xl mt-24 flex flex-col md:flex-row scroll-smooth scroll-m-24"
    >
      <div className="w-2/3 mx-auto">
        <TechTabs used={techs} personalUsed={learningTechs} />
      </div>
      <div className="top-0 flex h-full items-center justify-center overflow-hidden">
        <IconCloud images={images} />
      </div>
    </section>
  )
}
