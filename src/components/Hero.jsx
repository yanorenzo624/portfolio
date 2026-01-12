import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24">

      <motion.div
        className="text-center max-w-xl"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-4xl font-bold mb-4">
          Hi, I’m <span className="text-green-600">Yano Renzo</span>
        </h2>

        <p className="text-gray-600 mb-6">
          Frontend Developer building responsive and user-friendly web
          applications with React.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            View Projects
          </a>

          <a
            href="/RenzoYano-Frontend-Developer-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
