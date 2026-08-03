import profile from "@/assets/profile2.jpeg";

import Image from "next/image";
import { FramerEmotion } from "./framermotion";

export function About() {
  const technologies = [
    "React.js",
    "Next.js",
    "Vue.js",
    "Nuxt.js",
    "TypeScript",
  ];

  return (
    <FramerEmotion className="px-5 lg:px-10 py-20" id="about">
      <div className="mb-6">
        <h2 className="text-4xl font-bold  tracking-tight text-center text-white  ">
          Sobre <span className="text-red-500"> Mim</span>
        </h2>
        <div className="text-center mt-4 flex justify-center">
          <span className="text-gray-400   border-red-500 text-center text-sm border-b ">
            Construindo o futuro através da tecnologia
          </span>
        </div>
      </div>

      <div className="text-white  flex-col flex lg:flex-row items-center max-w-5xl mx-auto gap-10">
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-red-500/20 blur-3xl scale-90" />

          <div
            className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96 
                       rounded-full overflow-hidden border-2 border-red-500
                       shadow-lg shadow-red-500/20 
                       ring-4 ring-red-500/10 ring-offset-4 ring-offset-black"
          >
            <Image
              src={profile}
              alt="Augusto Manuel"
              className="h-full w-full object-cover"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="max-w-3xl">
          <p className="text-lg leading-8 text-gray-300">
            Sou{" "}
            <span className="text-red-500">
              {" "}
              Augusto Manuel , Frontend Developer
            </span>{" "}
            apaixonado por transformar ideias em experiências digitais modernas
            e funcionais. Gosto de criar interfaces intuitivas, responsivas e de
            alto desempenho, sempre procurando unir design, usabilidade e código
            limpo.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Ao longo da minha jornada, tenho aprofundado os meus conhecimentos
            em desenvolvendo projetos que me permitiram aplicar boas práticas de
            desenvolvimento, integração com APIs REST e arquiteturas modernas
            para aplicações web.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            O meu objetivo é contribuir para a criação de produtos digitais que
            gerem impacto positivo, oferecendo soluções eficientes, escaláveis e
            uma excelente experiência para os utilizadores.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-full text-sm font-medium
                           bg-red-500/10 text-red-400 border border-red-500/30
                           hover:bg-red-500/20 hover:border-red-500/50
                           transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </FramerEmotion>
  );
}
