import React from "react";
import './myworks.css';

const projects = [
    {
        name: "Bank Project",
        technologies: ["React", "WEB API", "CSS", "SQL"],
        description: "Developed a web-based bank application using React.js, WEBAPI, and SQL. Integrated SQL procedures for efficient data management. Implemented role-based access control for customers, loan employees, savings employees, and managers, enabling various functionalities tailored to each role.",
        githubUrl: "https://github.com/Avinashlinga41665/infinitebankproject"
    },
    {
        name: "Project Estimation Tool",
        technologies: ["WinForms", "SQL"],
        description: "Developed a user-friendly desktop application using WinForms and integrated SQL for data storage. Designed an intuitive UI with tabbed navigation, allowing easy access to project history and functionalities for managing project files. Implemented a project estimation tool with configurable parameters and a timeline graph for visualizing project scope. Integrated resource management and enabled generation of comprehensive project reports in PDF format.",
        githubUrl: "https://github.com/Avinashlinga41665/Project-Estimation-Tool"
    },
    {
        name: "Weather Forecaster",
        technologies: ["WPF", "API"],
        description: "Developed a weather forecasting system with real-time data integration and an intuitive user interface.",
        githubUrl: "https://github.com/Avinashlinga41665/Weather_Forecaster"
    },
];

const MyWorks = () => {
    return (
        <section id="myworks" className="works-section">
            <h2>My Works</h2>
            <div className="works-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.name}</h3>
                        <p>Technologies: {project.technologies.join(", ")}</p>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                View Code
                            </a>
                        <div className="project-popup">
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MyWorks;
