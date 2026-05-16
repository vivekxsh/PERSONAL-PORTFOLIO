import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Responsibility = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Responsibilities
      </motion.h2>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 rounded-full" />

        {EXPERIENCES.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className={`mb-16 flex w-full items-center ${
                isLeft ? "justify-start" : "justify-end"
              }`}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 80 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />

              <div className="w-full md:w-1/2 px-4">
                <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-8 backdrop-blur-lg shadow-lg hover:border-cyan-500 transition">
                  <p className="text-sm text-cyan-400">{item.year}</p>
                  <h3 className="text-xl font-bold text-white mt-2">
                    {item.role}
                  </h3>
                  <p className="text-neutral-400 mt-3">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300 border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Responsibility;