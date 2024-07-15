import React from 'react';
import './experience.css';

const experiences = [
    {
        role: "Associate Software Engineer",
        company: "Infinite Computer Solutions",
        duration: "Aug 2023 - Present",
        responsibilities: [
            "Developed and maintained web applications using .NET and React.",
            "Collaborated with cross-functional teams to deliver projects on time.",
            "Implemented best practices for code quality and performance optimization."
        ]
    },
];

const Experience = () => {
    return (
        <section id="experience">
            <h2>Experience</h2>
            <div className="experience-container">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-card">
                        <h3>{exp.role}</h3>
                        <p><strong>{exp.company}</strong></p>
                        <p>{exp.duration}</p>
                        <ul>
                            {exp.responsibilities.map((resp, i) => (
                                <li key={i}>{resp}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
