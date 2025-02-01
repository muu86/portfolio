import { Hero } from "@/components/hero";
import { Career } from "@/components/career";

export default function Home() {
  return (
    <div className="flex-auto">
      <Hero />
      <Career />
    </div>
  );
}
