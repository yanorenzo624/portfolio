import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";

const About = () => {
  return (
    <motion.section
      className="max-w-5xl mx-auto px-6 py-20"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold mb-4">About Me</h3>
      <p className="text-gray-600 leading-relaxed">
        I’m a self-taught frontend developer focused on building clean,
        responsive interfaces. I enjoy working with React, solving UI
        challenges, and turning ideas into real products.
      </p>
    </motion.section>
  );
};

export default About;
