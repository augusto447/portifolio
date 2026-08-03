import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="/"
      className="
        relative
        overflow-hidden
        flex
        flex-col
        gap-14
        pt-12
       
pb-24
lg:pt-16
lg:pb-32

        lg:flex-row
        lg:items-center
        lg:justify-between
        lg:px-10
        lg:py-32
      "
    >
      <div className=" max-w-md top-0">
        <h1 className="mt-5 text-4xl text-white lg:text-5xl font-bold leading-tight">
          Olá, sou Augusto <span className="text-red-500">Manuel.</span>
        </h1>

        <h2 className="mt-3 text-xl md:text-2xl text-gray-400 font-medium">
          Frontend Developer
        </h2>

        <p className="mt-6 text-gray-400 leading-relaxed">
          Frontend Developer focado em React, Next.js, Vue.js e Nuxt.js. Crio
          interfaces modernas, responsivas e escaláveis com TypeScript,
          integração de APIs REST e tecnologias web atuais.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="group flex items-center gap-2 rounded-md bg-red-500 px-6 py-3
             font-bold text-white cursor-pointer
             hover:bg-red-600 transition-colors duration-300"
          >
            Ver Projetos
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="#contact"
            className="flex items-center gap-2 rounded-md border border-red-500 px-6 py-3
                       font-bold text-white cursor-pointer
                       hover:bg-red-500/10 transition-colors duration-300"
          >
            <Mail className="h-4 w-4" />
            Contactar
          </Link>
        </div>
      </div>

      <div
        className="relative w-full max-w-md rounded-xl bg-zinc-900 border border-gray-800 
                   shadow-2xl shadow-red-500/5 overflow-hidden"
      >
        {/* Barra estilo editor */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-zinc-950/50">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
          <span className="ml-2 text-xs text-gray-500">developer.ts</span>
        </div>

        <pre className="px-6 py-5 text-sm leading-relaxed overflow-x-auto">
          <code>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-blue-400">developer</span>{" "}
            <span className="text-gray-500">=</span>{" "}
            <span className="text-gray-500">{"{"}</span>
            {"\n  "}
            <span className="text-red-400">name</span>
            <span className="text-gray-500">:</span>{" "}
            <span className="text-green-400">"Augusto Manuel"</span>
            <span className="text-gray-500">,</span>
            {"\n  "}
            <span className="text-red-400">role</span>
            <span className="text-gray-500">:</span>{" "}
            <span className="text-green-400">"Frontend Developer"</span>
            <span className="text-gray-500">,</span>
            {"\n\n  "}
            <span className="text-red-400">stack</span>
            <span className="text-gray-500">:</span> [{"\n    "}
            <span className="text-green-400">"React.js"</span>,{"\n    "}
            <span className="text-green-400">"Next.js"</span>,{"\n    "}
            <span className="text-green-400">"Vue.js"</span>,{"\n    "}
            <span className="text-green-400">"Nuxt.js"</span>,{"\n    "}
            <span className="text-green-400">"TypeScript"</span>,{"\n    "}
            <span className="text-green-400">"Tailwind CSS"</span>,{"\n    "}
            <span className="text-green-400">"REST API"</span>,{"\n    "}
            <span className="text-green-400">"Git"</span>,{"\n    "}
            <span className="text-green-400">"Docker"</span>
            {"\n  "}],
            {"\n\n  "}
            <span className="text-red-400">focus</span>
            <span className="text-gray-500">:</span>{" "}
            <span className="text-green-400">"Modern Web Applications"</span>
            {"\n"}
            <span className="text-gray-500">{"}"}</span>
          </code>
        </pre>
      </div>
    </section>
  );
}
