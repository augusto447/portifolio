import { Code2, Database, GitBranch, Users } from "lucide-react";

export function useTechnologies() {
  const technologies = [
    {
      icon: Code2,
      title: "Frontend",
      description:
        "Construção de interfaces modernas, responsivas e escaláveis.",
      Technologies: [
        "React.js",
        "Next.js",
        "Vue.js",
        "Nuxt.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Shadcn UI",
      ],
    },

    {
      icon: GitBranch,

      title: "Versionamento & DevOps",
      description:
        "Ferramentas para organização, versionamento e entrega de aplicações.",
      Technologies: ["Git", "GitHub", "Vercel"],
    },

    {
      icon: Database,
      description:
        "Desenvolvimento e integração de APIs, comunicação entre frontend e backend,.",

      title: "APis & Banco de Dados",
      Technologies: ["Rest API", "PostgreSQL", "MySQL"],
    },

    {
      icon: Users,
      title: "Metodologias Ágeis",
      description:
        "Práticas utilizadas no desenvolvimento de software em equipa.",
      Technologies: ["SCrum", "Kamban"],
    },
  ];

  return {
    technologies,
  };
}
