import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations/variants";

const projects = [
    {
        title: "E-Commerce Store",
        description: "Responsive shopping app with cart and product filtering.",
        tech: "React • Tailwind • API",
        live: "#",
        code: "#",
    },
    {
        title: "Dashboard App",
        description: "Modern dashboard UI with charts and cards.",
        tech: "React • Chart.js",
        live: "#",
        code: "#",
    },
    {
        title: "Weather App",
        description: "API-based weather app with search and loading states.",
        tech: "React • API",
        live: "#",
        code: "#",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="bg-gray-50 py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-bold mb-8">Projects</h3>

                <motion.div
                    className="grid md:grid-cols-3 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
                        >
                            <h4 className="font-semibold mb-2">{project.title}</h4>
                            <p className="text-gray-600 text-sm mb-3">
                                {project.description}
                            </p>
                            <p className="text-xs text-gray-500 mb-4">{project.tech}</p>
                            <div className="flex gap-4 text-sm">
                                <a href={project.live} className="text-green-600">Live</a>
                                <a href={project.code} className="text-green-600">Code</a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Projects;
