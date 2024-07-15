// src/Home.js
import React from "react";
import './skills.css';

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
          <h2>My Skills</h2>
            <div className="skills-container">
                <div className="skill-card">
                    <h2>Frontend</h2>
                    <ul>
                        <li>HTML/CSS</li>
                        <li>JavaScript (React, Angular)</li>
                    </ul>
                </div>
                <div className="skill-card">
                    <h2>Backend</h2>
                    <ul>
                        <li>Node.js</li>
                        <li>.NET Core</li>
                        <li>Java (Spring Boot)</li>
                    </ul>
                </div>
                <div className="skill-card">
                    <h2>Database</h2>
                    <ul>
                        <li>SQL (MySQL)</li>
                        <li>Database Design</li>
                    </ul>
                </div><div className="skill-card">
                    <h2>Others</h2>
                    <ul>
                        <li></li>
                        
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
