import { OPEN_SOURCE_CONTRIBUTIONS } from "../constants";
import { motion } from "framer-motion";

const OpenSource = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Open Source & Hacktoberfest
      </motion.h2>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-purple-500 via-cyan-500 to-pink-500 rounded-full" />

        {OPEN_SOURCE_CONTRIBUTIONS.achievements.map((item, index) => {
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
              <div className="absolute left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-purple-500 shadow-[0_0_20px_#a855f7]" />

              <div className="w-full md:w-1/2 px-4">
                <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-8 backdrop-blur-lg shadow-lg hover:border-purple-500 transition">
                  <p className="text-sm text-purple-400">
                    {OPEN_SOURCE_CONTRIBUTIONS.duration}
                  </p>

                  <h3 className="text-xl font-bold text-white mt-2">
                    {item.project}
                  </h3>

                  <a
                    href={item.issueLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cyan-400 hover:underline mt-2 inline-block"
                  >
                    {item.issue}
                  </a>

                  <p className="text-neutral-400 mt-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default OpenSource;