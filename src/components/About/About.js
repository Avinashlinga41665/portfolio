import React from "react";
import './about.css';

const About = () => {
    return (
        <section id="about">
            <div className="about-content fade-in">
                <h2>About Me</h2>
                <p>
                    Hi, I'm <span className="highlight">Avinash Linga</span>, but you can just call me Avinash. I'm currently working as an 
                    <span className="highlight">Associate Software Engineer</span>, where I specialize in 
                    <span className="highlight">.NET backend and frontend development</span>. Over my career, I've had the opportunity to build 
                    projects from the ground up, such as a <span className="highlight">project estimation tool</span> and a 
                    <span className="highlight">weather forecaster</span>, utilizing the <span className="highlight">Software Development Life Cycle (SDLC)</span> methodology.
                </p>
                <p>
                    My goal is to make valuable contributions to my company, helping to drive success through 
                    innovative and efficient solutions. When I'm not coding, I enjoy playing 
                    cricket, watching web series, and traveling to new places.
                </p>
                <p>
                    I'm passionate about my work and always look forward to new 
                    challenges and learning opportunities. Feel free to explore my portfolio to see more about my 
                    projects and experiences. I'm excited to share my journey with you!
                </p>
            </div>
        </section>
    );
};

export default About;
