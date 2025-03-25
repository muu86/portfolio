import { Hero } from "@/components/hero";
import { FlowStoreProvider } from "@/lib/flow/context/flow-context-provider";
import { Career } from "@/app/components/career";
import { Project } from "@/app/components/project";
import { Education } from "@/app/components/education";
import { PersonalProject } from "@/app/components/personal-project";

export default async function Home() {
  return (
    <FlowStoreProvider>
      <Hero />

      <Career />

      <Project />

      <PersonalProject />

      <Education />
    </FlowStoreProvider>
  );
}
