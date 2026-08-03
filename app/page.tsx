import { About } from "@/components/about";
import { Contact } from "@/components/contacts";
import { Experiences } from "@/components/experiences";
import { Footer } from "@/components/footer";
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
      <Contact />
      <Footer />
    </div>
  );
}
