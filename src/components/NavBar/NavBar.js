import React from "react";
import './navbar.css'
import { Link } from "react-scroll";
const navbar = () =>{
    const email = 'avinashlinga41665@gmail.com';
    const subject = 'Contact from Portfolio';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    return(
        <nav className="navbar">
        <Link className="navbarmenuitem" to="intro" spy={true} smooth={true} duration={500}>Home</Link>
        <Link className="navbarmenuitem" to="experience" spy={true} smooth={true} duration={500}>Experience</Link>
        <Link className="navbarmenuitem" to="skills" spy={true} smooth={true} duration={500}>Skills</Link>
        <Link className="navbarmenuitem" to="myworks" spy={true} smooth={true} duration={500}>My Works</Link>
        <a className="navbarmenuitem" href={mailtoLink}>Contact Me</a>
        </nav>
    )
}
export default navbar