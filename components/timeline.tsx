"use client";

import { useTimeline } from "@/hooks/useTimeline";
import { FramerEmotion } from "./framermotion";

export function TimeLine() {
  const { timeline } = useTimeline();

  return (
    <FramerEmotion id="timeline" className="px-5 md:px-10 py-5 scroll-mt-24">
      <div>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white tracking-tight">
          Linha do Tempo
        </h2>

        <div className="mt-4 flex justify-center">
          <span className="text-gray-400 text-sm md:text-base text-center max-w-xl border-b border-red-500 pb-1">
            Minha evolução académica e profissional na área de tecnologia.
          </span>
        </div>
      </div>

      <div className="relative mt-16 max-w-4xl mx-auto">
        <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-red-500/70 via-gray-700 to-transparent" />

        <div className="space-y-10">
          {timeline.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title + item.company}
                className="relative flex gap-6 md:gap-8"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.08}s both`,
                }}
              >
                <div className="relative z-10 shrink-0">
                  {item.current && (
                    <span className="absolute inset-0 rounded-full bg-red-500/30 blur-md animate-pulse" />
                  )}
                  <div
                    className={`relative flex h-12 w-12 items-center justify-center rounded-full bg-black border 
                      ${item.current ? "border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.35)]" : "border-red-500/30"}`}
                  >
                    <Icon className="h-5 w-5 text-red-500" />
                  </div>
                </div>

                <div className="group flex-1 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-950 to-black p-6 transition-all duration-300 hover:border-red-500/60 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(239,68,68,0.12)]">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-red-400 font-medium mt-1">
                        {item.company}
                      </p>
                    </div>

                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium tracking-wide
                        ${
                          item.current
                            ? "bg-red-500/15 text-red-400 border border-red-500/30"
                            : "bg-gray-900 text-gray-400 border border-gray-800"
                        }`}
                    >
                      {item.year}
                    </span>
                  </div>

                  <p className="mt-4 text-gray-400 leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </FramerEmotion>
  );
}
