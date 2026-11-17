import { AiEngineering } from "@/components/AiEngineering";
import { Clients } from "@/components/Clients";
import { Cta } from "@/components/Cta";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Metric } from "@/components/Metric";
import { Nav } from "@/components/Nav";
import { Results } from "@/components/Results";
import { Services } from "@/components/Services";
import { Divider } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Divider />
        <Clients />
        <Divider />
        <Services />
        <Results />
        <AiEngineering />
        <Metric />
        {/* <Testimonials /> oculto até termos depoimentos; reimportar de "@/components/Testimonials" */}
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
