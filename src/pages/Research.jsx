import { motion } from 'framer-motion';
import { FaMicroscope } from 'react-icons/fa';
import ResearchCard from '../components/ResearchCard';
import researchData from '../data/research.json';
import './Research.css';

const Research = () => {
    return (
        <div className="research-page section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="section-title">Research & Innovation</h1>
                    <p className="section-subtitle">
                        Exploring the boundaries of technology through dedicated R&D projects.
                    </p>
                </motion.div>

                <div className="research-grid">
                    {researchData.research.map((item, index) => (
                        <ResearchCard key={item.id} research={item} index={index} />
                    ))}
                </div>

                <motion.div
                    className="research-footer-note glass-card"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <FaMicroscope className="footer-icon" />
                    <p>Interested in collaborating on research? Feel free to reach out!</p>
                </motion.div>
            </div>
        </div>
    );
};

export default Research;
