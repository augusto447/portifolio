import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Code2,
  LayoutTemplate,
  Plug,
  Palette,
  LayoutDashboard,
  Smartphone,
} from "lucide-react";

export function Services() {
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

  return (
    <section className="px-6 md:px-10 py-16" id="services">
      <div>
        <h2 className="text-center text-4xl  font-bold text-white tracking-tight">
          Serviços
        </h2>

        <div className="mt-4 flex justify-center">
          <span className="text-gray-400 text-sm md:text-base text-center max-w-xl border-b border-red-500 pb-1">
            Transformando ideias em interfaces rápidas, responsivas e funcionais
            através da tecnologia.
          </span>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card
              key={service.title}
              className="group relative overflow-hidden bg-black border border-gray-800 
                         transition-all duration-300 hover:border-red-500/60 
                         hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(239,68,68,0.15)]"
            >
              <div
                className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full 
                              bg-red-500/10 blur-3xl opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500"
              />

              <CardHeader className="relative z-10">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl 
                                bg-red-500/10 border border-red-500/20 
                                group-hover:bg-red-500/20 transition-colors duration-300"
                >
                  <Icon className="h-6 w-6 text-red-500" />
                </div>

                <CardTitle className="text-white font-bold text-xl leading-snug">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-400 mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <p className="text-sm text-gray-500">
                  Desenvolvimento profissional de software
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
