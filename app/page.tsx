import { Hero } from "@/components/views/hero";
import { Career } from "@/components/views/career";
import { Project } from "@/components/views/project";
import { Education } from "@/components/views/education";
import { PersonalProject } from "@/components/views/personal-project";
import { Footer } from "@/components/views/footer";

export default async function Home() {
  return (
    <>
      <Hero />

      <Project />

      <Career />

      <PersonalProject />

      <Education />

      <Footer />
    </>
  );
}
