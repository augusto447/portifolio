import { Briefcase, Code2, GraduationCap } from "lucide-react";

export function useExperience() {
  const experiences = [
    {
      icon: Code2,
      title: "Frontend Developer",
      company: "Buki technology",
      period: "2026- Actual",
      description:
        "desenvolvimento do Manager Painel da plataforma Buki, criando interfaces modernas, integração com apis e gestão de dados",
      technologies: ["Vue.js", "Nuxt.js", "TypeScript", "Nuxt", "Rest Api"],
    },

    {
      icon: Briefcase,
      title: "Frontend Developer",
      company: "Inovasoft",
      period: "2024-2025",
      description:
        "desenvolvimento de apliacações web responsivas, criação de componentes reutilizavéis e integração de com servições do backend",
      technologies: ["React.js", "Next.js", "TypeScript", "Shadcn", "Rest Api"],
    },

    {
      icon: Code2,
      title: "Frontend Developer",
      company: "Syntech",
      period: "2025",
      description:
        "Construção de interfaces web modernas, manutenção de aplicações e implementação de funcionalidades utilizando tecnologias frontend.",
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "REST API"],
    },

    {
      icon: GraduationCap,
      title: "Engenharia de Telecomunicações",
      company: "Universidade de Luanda",
      period: "2024 - Atual",
      description:
        "Formação em Engenharia de Telecomunicações, desenvolvendo conhecimentos em redes, sistemas, programação e tecnologia.",
      technologies: ["Redes", "Programação", "Sistemas", "Tecnologia"],
    },
  ];

  return {
    experiences,
  };
}
