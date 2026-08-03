import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Leaf,
  Droplet,
  Tractor,
  Pizza,
  CreditCard,
  LayoutDashboardIcon,
  Globe,
} from "lucide-react";

export function Projects() {
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
      link: "https://vis-overde-uen6-gta8awlf1-augusto447s-projects.vercel.app",
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
      link: "https://vis-overde-uen6-gta8awlf1-augusto447s-projects.vercel.app",

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

  return (
    <section className="px-6 md:px-10 py-16" id="projects">
      <div>
        <h2 className="text-center text-4xl md:text-5xl font-bold text-white tracking-tight">
          Projectos
        </h2>

        <div className="mt-4 flex justify-center">
          <span className="text-gray-400 text-sm md:text-base text-center max-w-xl border-b border-red-500 pb-1">
            Criando soluções digitais modernas, escaláveis e funcionais através
            de tecnologias atuais.
          </span>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((projects) => {
          const Icon = projects.icon;
          return (
            <Card
              key={projects.title}
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
                  {projects.title}
                </CardTitle>
                <CardDescription className="text-gray-400 mt-2">
                  {projects.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  {projects.technologies.map((tech) => (
                    <span
                      className="rounded-full text-sm text-red-400 border px-3 py-1 bg-red-500/10"
                      key={tech}
                    >
                      {" "}
                      {tech}{" "}
                    </span>
                  ))}
                </div>
              </CardContent>

              <Link
                href={projects.link}
                target="_blank"
                className="
  text-gray-400 px-5 flex gap-2  
  "
              >
                Ver Projeto
                <Globe className="w-5 h-5" />
              </Link>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
