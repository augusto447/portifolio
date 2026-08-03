import {
  Leaf,
  Droplet,
  Tractor,
  Pizza,
  CreditCard,
  LayoutDashboardIcon,
  Globe,
} from "lucide-react";

export function useProjects() {
  const projects = [
    {
      icon: Leaf,
      title: "Vision Verde",
      link: "https://vis-overde-uen6-f5vxu7pgw-augusto447s-projects.vercel.app/",

      description:
        "Plataforma para conectar produtores agrícolas e compradores, reduzindo desperdícios através da tecnologia.",
      technologies: ["React.js", "Tailwind CSS", "TypeScript", "REST API"],
    },
    {
      icon: Droplet,
      title: "AquaSmart",
      link: "https://aquasmart-tau.vercel.app/",
      description:
        "Sistema de monitoramento de aquicultura com visualização de dados dos sensores em tempo real.",
      technologies: [
        "React.js",
        "Recharts",
        "C# .NET",
        "PostgreSQL",
        "Docker",
        "REST API",
      ],
    },
    {
      icon: Tractor,
      title: "Agrozimbo",
      link: "https://agro-zimbu.vercel.app/",
      description:
        "Aplicação web para apoiar produtores agrícolas com uma interface moderna e responsiva.",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "REST API"],
    },
    {
      icon: Pizza,
      link: "",
      title: "Pizza Shop Dashboard",
      description:
        "Dashboard administrativo para gestão de pedidos e visualização de informações.",
      technologies: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Recharts",
      ],
    },
    {
      icon: CreditCard,
      link: "trust-pay-iota.vercel.app",

      title: "TrustPay",
      description: "Aplicação web focada em soluções de pagamentos digitais.",
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: LayoutDashboardIcon,
      link: "https://manager.buki.ao/",

      title: "Buki Manager Panel",
      description:
        "Painel administrativo para gestão de transações e dados da plataforma Buki.",
      technologies: ["Vue.js", "Nuxt.js", "TypeScript", "Nuxt UI", "REST API"],
    },
  ];
  return {
    projects,
  };
}
