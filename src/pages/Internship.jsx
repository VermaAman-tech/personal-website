import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import internshipsData from '../data/internships.json';
import './Internship.css';

const Internship = () => {
    return (
        <div className="internship-page section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="section-title">Internship Experience</h1>
                    <p className="section-subtitle">
                        Professional experiences and roles where I've contributed and learned.
                    </p>
                </motion.div>

                <div className="internship-timeline">
                    {internshipsData.internships.map((internship, index) => (
                        <motion.div
                            key={internship.id}
                            className="internship-item glass-card"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="internship-header">
                                <div className="internship-role-box">
                                    <FaBriefcase className="role-icon" />
                                    <div>
                                        <h3>{internship.role}</h3>
                                        <h4 className="text-gradient">{internship.company}</h4>
                                    </div>
                                </div>
                                <div className="internship-meta">
                                    <div className="meta-item">
                                        <FaMapMarkerAlt />
                                        <span>{internship.location}</span>
                                    </div>
                                    <div className="meta-item">
                                        <FaCalendarAlt />
                                        <span>{internship.duration}</span>
                                    </div>
                                </div>
                            </div>

                            <p className="internship-description">{internship.description}</p>

                            {internship.highlights && (
                                <ul className="internship-highlights">
                                    {internship.highlights.map((highlight, idx) => (
                                        <li key={idx}>{highlight}</li>
                                    ))}
                                </ul>
                            )}

                            <div className="internship-tech">
                                {internship.technologies.map((tech, idx) => (
                                    <span key={idx} className="tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Internship;
