import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Projects
      </motion.h2>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-pink-500 via-cyan-500 to-purple-500 rounded-full" />

        {PROJECTS.map((project, index) => {
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
              <div className="absolute left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-pink-500 shadow-[0_0_20px_#ec4899]" />

              <div className="w-full md:w-1/2 px-4">
                <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-8 backdrop-blur-lg shadow-lg hover:border-pink-500 transition">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-60 w-full object-cover rounded-2xl mb-5"
                  />

                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="text-neutral-400 mt-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-pink-500/10 px-3 py-1 text-sm text-pink-300 border border-pink-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-5">
                    <a
                      href={project.GitUrl}
                      target="_blank"
                      className="flex items-center gap-2 text-white hover:text-pink-400"
                    >
                      <FaGithub /> GitHub
                    </a>

                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      className="flex items-center gap-2 text-white hover:text-cyan-400"
                    >
                      <FaGlobe /> Live
                    </a>
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

export default Projects;