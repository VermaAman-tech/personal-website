import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGraduationCap, FaAward, FaBook } from 'react-icons/fa';
import CourseTable from '../components/CourseTable';
import academicsData from '../data/academics.json';
import './Academics.css';

const Academics = () => {
    const [selectedSemester, setSelectedSemester] = useState(1);

    const currentSemester = academicsData.semesters.find(
        (sem) => sem.semester === selectedSemester
    );

    return (
        <div className="academics-page section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="section-title">Academic Journey</h1>
                </motion.div>

                {/* Education Stats */}
                <div className="education-stats grid grid-2">
                    <motion.div
                        className="stat-card glass-card"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="stat-icon">
                            <FaGraduationCap />
                        </div>
                        <div className="stat-content">
                            <h3>Class 10 (CBSE)</h3>
                            <div className="stat-value">{academicsData.class10.percentage}%</div>
                            <p className="stat-meta">{academicsData.class10.board} - {academicsData.class10.year}</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="stat-card glass-card"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="stat-icon">
                            <FaAward />
                        </div>
                        <div className="stat-content">
                            <h3>Class 12 ({academicsData.class12.stream})</h3>
                            <div className="stat-value">{academicsData.class12.percentage}%</div>
                            <p className="stat-meta">{academicsData.class12.board} - {academicsData.class12.year}</p>
                        </div>
                    </motion.div>
                </div>

                {/* College Info */}
                <motion.div
                    className="college-card glass-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="college-icon">
                        <FaBook />
                    </div>
                    <div className="college-info">
                        <h2>{academicsData.college.degree}</h2>
                        <h3>{academicsData.college.name}</h3>
                        <div className="college-details">
                            <span className="cgpa-badge">CGPA: {academicsData.college.cgpa}/10.0</span>
                            <span className="year-badge">{academicsData.college.year}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Semester Courses */}
                <motion.div
                    className="courses-section"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="subsection-title">Semester-wise Courses</h2>

                    <div className="semester-tabs">
                        {academicsData.semesters.map((sem) => (
                            <button
                                key={sem.semester}
                                className={`semester-tab ${selectedSemester === sem.semester ? 'active' : ''}`}
                                onClick={() => setSelectedSemester(sem.semester)}
                            >
                                Semester {sem.semester}
                            </button>
                        ))}
                    </div>

                    <div className="semester-content">
                        {currentSemester && (
                            <CourseTable semester={currentSemester} />
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Academics;
