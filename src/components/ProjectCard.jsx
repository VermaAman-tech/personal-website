import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            className="project-card glass-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
        >
            <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                            <FaGithub />
                        </a>
                    )}
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                            <FaExternalLinkAlt />
                        </a>
                    )}
                </div>
            </div>

            <p className="project-description">{project.description}</p>

            {project.highlights && (
                <ul className="project-highlights">
                    {project.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                    ))}
                </ul>
            )}

            <div className="project-skills">
                {project.skills.map((skill, idx) => (
                    <span key={idx} className="tag">
                        {skill}
                    </span>
                ))}
            </div>

            {project.date && (
                <div className="project-date">{project.date}</div>
            )}
        </motion.div>
    );
};

export default ProjectCard;
