import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { FramerEmotion } from "./framermotion";
import { useExperience } from "@/hooks/useExperiences";

export function Experiences() {
  const { experiences } = useExperience();

  return (
    <FramerEmotion id="experiences" className="px-6 md:px-10 py-16 ">
      <div>
        <h2 className="text-center text-4xl font-bold text-white tracking-tight">
          Experiências
        </h2>

        <div className="mt-4 flex justify-center">
          <span className="text-gray-400 text-sm md:text-base text-center max-w-xl border-b border-red-500 pb-1">
            Evoluindo através de projetos, desafios e experiências no
            desenvolvimento de soluções digitais.
          </span>
        </div>
        <div className=" mt-14 grid grid-cols-1 md:grid-cols-2 gap-2">
          {experiences.map((experience) => {
            const Icon = experience.icon;
            return (
              <Card
                key={experience.title + experience.company}
                className="   bg-black border border-gray-800 
              hover:border-red-500/60 
              transition-all duration-300
              hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center 
                    rounded-xl bg-red-500/10 border border-red-500/20"
                    >
                      <Icon className="h-6 w-6 text-red-500" />
                    </div>
                  </div>

                  <div>
                    <CardTitle className="text-white">
                      {experience.title}
                    </CardTitle>

                    <p className="text-red-400 text-sm">{experience.company}</p>
                    <p className="text-gray-500 text-sm">{experience.period}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 mb-4">
                    {experience.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full text-sm text-red-400 border-red-500 border px-3 py-1 bg-red-500/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </FramerEmotion>
  );
}
