import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Solution from "@/components/Solution";
import Process from "@/components/Process";
import Compare from "@/components/Compare";
import Pricing from "@/components/Pricing";
import Reputation from "@/components/Reputation";
import Founder from "@/components/Founder";
import FAQ from "@/components/FAQ";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Problems />
      <Solution />
      <Process />
      <Compare />
      <Pricing />
      <Reputation />
      <Founder />
      <FAQ />
    </main>
  );
}
