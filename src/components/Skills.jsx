import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations/variants";

const Skills = () => {
    return (
        <section className="max-w-5xl mx-auto px-6 py-20">
            <h3 className="text-2xl font-bold mb-6">Skills</h3>
            <motion.div
                className="flex flex-wrap gap-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"].map(skill => (
                    <motion.span
                        key={skill}
                        variants={fadeUp}
                        className="bg-gray-100 px-4 py-2 rounded-full text-sm"
                    >
                        {skill}
                    </motion.span>
                ))}
            </motion.div>

        </section>
    );
};

export default Skills;
