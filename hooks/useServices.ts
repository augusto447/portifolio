import {
  Code2,
  LayoutTemplate,
  Plug,
  Palette,
  LayoutDashboard,
  Smartphone,
} from "lucide-react";

export function useServices() {
  const services = [
    {
      icon: Code2,
      title: "Desenvolvimento Frontend de Website & Sistemas",
      description: "Interfaces modernas e responsivas.",
    },
    {
      icon: LayoutTemplate,
      title: "Landing Page",
      description:
        "Páginas profissionais focadas em apresentação de produtos e serviços.",
    },
    {
      icon: Plug,
      title: "Integração com APIs",
      description:
        "Consumo de APIs REST e integração de dados em aplicações web.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Interfaces intuitivas com foco na experiência do utilizador.",
    },
    {
      icon: LayoutDashboard,
      title: "Aplicações Web",
      description: "Dashboards e sistemas web modernos e escaláveis.",
    },
    {
      icon: Smartphone,
      title: "Responsividade",
      description:
        "Layouts adaptados para computadores, tablets e smartphones.",
    },
  ];
  return {
    services,
  };
}
