import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import aboutData from '../data/about.json';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <div className="container">
                <div className="hero-section">
                    <motion.div
                        className="profile-image-container"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src="/profile.jpg"
                            alt={aboutData.name}
                            className="profile-image"
                        />
                        <div className="profile-ring"></div>
                    </motion.div>

                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <h1 className="hero-title">
                            Hi, I'm <span className="text-gradient">{aboutData.name}</span>
                        </h1>
                        <h2 className="hero-subtitle">{aboutData.title}</h2>

                        <div className="hero-location">
                            <FaMapMarkerAlt />
                            <span>{aboutData.location}</span>
                        </div>

                        <p className="hero-bio">{aboutData.bio}</p>

                        <div className="hero-actions">
                            <a href={aboutData.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                <FaGithub /> View GitHub
                            </a>
                            <a href={`mailto:${aboutData.email}`} className="btn btn-secondary">
                                <FaEnvelope /> Contact Me
                            </a>
                        </div>

                        <div className="social-links">
                            <a href={aboutData.github} target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaGithub />
                            </a>
                            <a href={aboutData.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaLinkedin />
                            </a>
                            <a href={aboutData.twitter} target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaTwitter />
                            </a>
                            <a href={`mailto:${aboutData.email}`} className="social-icon">
                                <FaEnvelope />
                            </a>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="skills-section"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Core Skills</h2>
                    <div className="skills-grid">
                        {aboutData.skills.map((skill, index) => (
                            <motion.div
                                key={skill}
                                className="skill-tag"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.3 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
