import { Briefcase, Code2, GraduationCap, Rocket } from "lucide-react";

export function useTimeline() {
  const timeline = [
    {
      year: "2023 - Atual",
      icon: GraduationCap,
      title: "Engenharia de Telecomunicações",
      company: "Universidade de Luanda",
      description:
        "Formação académica na área de tecnologia, redes, sistemas de comunicação e programação, construindo uma base sólida para desenvolvimento de soluções digitais.",
      current: true,
    },

    {
      year: "2024 - 2025",
      icon: Briefcase,
      title: "Frontend Developer",
      company: "Inovasoft",
      description:
        " Desenvolvedor frontend, criando interfaces modernas, responsivas e utilizando tecnologias web atuais.",
      current: false,
    },
    {
      year: "2025",
      icon: Code2,
      title: "Frontend Developer",
      company: "Syntech",
      description:
        "Desenvolvimento de aplicações web, criação de componentes reutilizáveis e integração com APIs para construção de soluções digitais",
      current: false,
    },

    {
      year: "2026 - Atual",
      icon: Rocket,
      title: "Frontend Developer",
      company: "Buki Technologies",
      description:
        "Desenvolvimento do Manager Panel da plataforma Buki, trabalhando com Vue.js, Nuxt.js, TypeScript e integração de APIs.",
      current: true,
    },
  ];
  return {
    timeline,
  };
}
