import { History } from "@/components/sections/history"
import { AboutMe } from "@/components/sections/about-me"
import { TechStack } from "@/components/sections/tech-stack"
import { Hero } from "@/components/sections/hero"

export default function Home() {
  return (
    <div className="min-h-screen pb-20 gap-16 font-sans">
      <Hero />
      <History />
      <TechStack />

      <AboutMe />
    </div>
  )
}
