import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaCode } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';
import './Development.css';

const Development = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', ...projectsData.skillCategories.map(cat => cat.name)];

    const filteredProjects = activeCategory === 'All'
        ? projectsData.projects
        : projectsData.projects.filter(project => project.category === activeCategory);

    return (
        <div className="development-page section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="section-title">Development Projects</h1>
                    <p className="section-subtitle">
                        A collection of my technical projects, categorized by domains and skills.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <div className="category-filter">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div layout className="projects-grid">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="no-projects"
                    >
                        <FaCode className="no-projects-icon" />
                        <p>No projects found in this category yet.</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Development;
