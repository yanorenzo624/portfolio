import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations/variants";

const projects = [
    {
        title: "E-Commerce Store",
        description: "A fully responsive e-commerce frontend built with React, featuring product search, filtering, sorting, and a persistent shopping cart.",
        tech: "React • Tailwind CSS • Context API • REST API",
        live: "#",
        code: "https://github.com/yanorenzo624/ecommerce",
    },
    {
        title: "Admin Dashboard",
        description: "A production-style admin dashboard with role-based access control, protected routes, reusable async logic, and polished UX.",
        tech: "React • JavaScript • Tailwind CSS • React Router • Context API • Recharts • Vite",
        live: "#",
        code: "https://github.com/yanorenzo624/admin-dashboard",
    },
    {
        title: "Kanban Board",
        description: "A Trello-inspired Kanban board built with React and TypeScript, focused on clean state management, scalable architecture, and polished user experience.",
        tech: "React • TypeScript • Tailwind CSS • @dnd-kit • Vitest • Vite",
        live: "#",
        code: "https://github.com/yanorenzo624/kanban-board",
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
                                <a href={project.live} className="text-green-600">Live Demo</a>
                                <a href={project.code} className="text-green-600">GitHub Repo</a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Projects;
