import { Hero } from "@/components/hero";
import { Career } from "@/components/sections/career";
import { Project } from "@/components/sections/project";
import { Education } from "@/components/sections/education";
import { PersonalProject } from "@/components/sections/personal-project";

export default async function Home() {
  return (
    <>
      <Hero />

      <Career />

      <Project />

      <PersonalProject />

      <Education />
    </>
  );
}
