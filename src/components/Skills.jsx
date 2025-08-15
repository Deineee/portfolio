import React, { useMemo } from "react";
import { programmingLogos, utilityLogos } from "../constants"; // split arrays

export default function Skills() {
  const loopedProgramming = useMemo(() => [...programmingLogos, ...programmingLogos], []);
  const loopedUtilities = useMemo(() => [...utilityLogos, ...utilityLogos], []);

  return (
    <section id="skills" className="pt-16 pb-16 bg-10">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold">PROGRAMMING LANGUAGES & UTILITIES</h1>
      </div>

      {/* Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        {/* Programming Languages */}
        <div className="relative w-full overflow-hidden h-96">
          <div className="absolute top-0 h-16 w-full bg-gradient-to-b from-white to-transparent z-10" />
          <div className="absolute bottom-0 h-16 w-full bg-gradient-to-t from-white to-transparent z-10" />
          <div className="animate-scroll-up">
            {loopedProgramming.map((src, i) => (
              <div key={i} className="flex justify-center items-center h-24">
                <img src={src} alt="" className="w-16 h-16 object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Utilities */}
        <div className="relative w-full overflow-hidden h-96">
          <div className="absolute top-0 h-16 w-full bg-gradient-to-b from-white to-transparent z-10" />
          <div className="absolute bottom-0 h-16 w-full bg-gradient-to-t from-white to-transparent z-10" />
          <div className="animate-scroll-down">
            {loopedUtilities.map((src, i) => (
              <div key={i} className="flex justify-center items-center h-24">
                <img src={src} alt="" className="w-16 h-16 object-contain" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
