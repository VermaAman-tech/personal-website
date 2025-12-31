import { motion } from 'framer-motion';
import { useState } from 'react';
import './CourseTable.css';

const CourseTable = ({ semester }) => {
    return (
        <div className="course-table">
            <table>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Course Name</th>
                        <th>Credits</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {semester.courses.map((course, index) => (
                        <motion.tr
                            key={course.code}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <td><code>{course.code}</code></td>
                            <td>{course.name}</td>
                            <td>{course.credits}</td>
                            <td>
                                <span className={`grade grade-${course.grade.replace('+', 'plus').replace('-', 'minus')}`}>
                                    {course.grade}
                                </span>
                            </td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CourseTable;
