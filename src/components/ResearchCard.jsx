import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './ResearchCard.css';

const ResearchCard = ({ research, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            className="research-card glass-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
        >
            <div className="research-header">
                <h3>{research.title}</h3>
                <span className={`status-badge status-${research.status.toLowerCase().replace(' ', '-')}`}>
                    {research.status}
                </span>
            </div>

            <p className="research-description">{research.description}</p>

            <div className="research-meta">
                <span className="research-duration">{research.duration}</span>
                {research.publication && (
                    <span className="research-publication">📄 {research.publication}</span>
                )}
            </div>

            {isExpanded && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="research-details"
                >
                    {research.highlights && (
                        <div className="research-highlights">
                            <h4>Key Highlights</h4>
                            <ul>
                                {research.highlights.map((highlight, idx) => (
                                    <li key={idx}>{highlight}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </motion.div>
            )}

            <div className="research-footer">
                <div className="research-tech">
                    {research.technologies.map((tech, idx) => (
                        <span key={idx} className="tag">
                            {tech}
                        </span>
                    ))}
                </div>

                <button
                    className="expand-btn"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? (
                        <>
                            Show Less <FaChevronUp />
                        </>
                    ) : (
                        <>
                            Show More <FaChevronDown />
                        </>
                    )}
                </button>
            </div>
        </motion.div>
    );
};

export default ResearchCard;
