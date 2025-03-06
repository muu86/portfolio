import { Hero } from "@/components/hero";
import { Career } from "@/components/career";
import { Education } from "@/components/education";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl">
      <Hero />
      <Career />
      <Projects />
      <Education />
    </div>
  );
}
