export function Experiences() {
  const experiences = [
    {
      title: "Frontend",
    },
  ];

  return (
    <section id="experiences" className="px-6 md:px-10 py-16 ">
      <div>
        <h2 className="text-center text-4xl md:text-5xl font-bold text-white tracking-tight">
          Experiências
        </h2>

        <div className="mt-4 flex justify-center">
          <span className="text-gray-400 text-sm md:text-base text-center max-w-xl border-b border-red-500 pb-1">
            Evoluindo através de projetos, desafios e experiências no
            desenvolvimento de soluções digitais.
          </span>
        </div>
      </div>
    </section>
  );
}
