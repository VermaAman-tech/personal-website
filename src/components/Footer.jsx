import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-social">
                        <a href="https://github.com/VermaAman-tech" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/amanverma" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com/amanverma" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaTwitter />
                        </a>
                        <a href="mailto:amanverma@example.com" className="social-link">
                            <FaEnvelope />
                        </a>
                    </div>
                    <p className="footer-text">
                        © {currentYear} Aman Verma. Built with React & ❤️
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
