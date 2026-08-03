import { About } from "@/components/about";
import { Experiences } from "@/components/experiences";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Technologies } from "@/components/technologies";
import { TimeLine } from "@/components/timeline";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Experiences />
      <TimeLine />
      <Technologies />
    </div>
  );
}
