import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import resumePdf from "../assets/Vivek_Kumar_Resume.pdf";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCopy,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(CONTACT.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="border-b border-neutral-900 py-24 px-4">
      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-bold mb-16"
      >
        Get In Touch
      </motion.h2>

      {/* CARD WRAPPER */}
      <motion.div
        whileHover={{
          scale: 1.02,
          boxShadow: "0 0 70px rgba(168,85,247,0.25)",
        }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        className="relative mx-auto max-w-3xl rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-xl shadow-2xl p-10 overflow-hidden"
      >
        {/* 🌟 Animated Light Sweep Background */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "linear-gradient(120deg, transparent, rgba(168,85,247,0.15), transparent)",
          }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10">

          {/* Address */}
          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center gap-3 mb-6 text-neutral-300"
          >
            <FaMapMarkerAlt className="text-purple-400" />
            <span>{CONTACT.address}</span>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ x: -5 }}
            className="flex items-center gap-3 mb-6 text-neutral-300"
          >
            <FaPhone className="text-cyan-400" />
            <span>{CONTACT.phoneNo}</span>
          </motion.div>

          {/* EMAIL ROW */}
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 30px rgba(168,85,247,0.25)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex items-center justify-between bg-neutral-800/40 px-4 py-3 rounded-xl mb-8 border border-neutral-700"
          >
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 text-purple-400 hover:text-purple-300 transition"
            >
              <FaEnvelope />
              {CONTACT.email}
            </a>

            <motion.button
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              onClick={copyEmail}
              className="text-neutral-400 hover:text-white transition"
              title="Copy email"
            >
              <FaCopy />
            </motion.button>
          </motion.div>

          {/* RESUME BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">

            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-center shadow-lg hover:shadow-purple-500/30 transition"
            >
              View Resume
            </motion.a>

            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              href={resumePdf}
              download
              className="px-6 py-3 rounded-xl border border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white text-center transition"
            >
              Download CV
            </motion.a>

          </div>

          {/* SOCIAL LINKS */}
          <div className="flex justify-center gap-6 text-2xl text-neutral-400">

            <motion.a
              whileHover={{ scale: 1.3, color: "#ffffff" }}
              href="https://github.com/vivekxsh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.3, color: "#38bdf8" }}
              href="https://www.linkedin.com/in/vivek-kumar-576a50238/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </motion.a>

          </div>

          {/* COPY FEEDBACK */}
          {copied && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm text-green-400 mt-4"
            >
              Email copied to clipboard ✓
            </motion.p>
          )}

        </div>
      </motion.div>
    </div>
  );
};

export default Contact;