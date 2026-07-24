import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact">
            <div className="copyright">
                <p>&copy; 2026, Build with <span>React Js</span></p>
            </div>
            <div className="social-container">
                <a href="https://github.com/yashfeenfatima494" target ="_blank" rel="noreferrer" className = "social"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/yashfeen-fatima-61a772424/" target ="_blank" rel="noreferrer" className = "social"><FaLinkedin /></a>
            </div>
        </div>
    )
}

export default Contact
