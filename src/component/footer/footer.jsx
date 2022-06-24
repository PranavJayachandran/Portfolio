import React from "react";
import "./footer.css";
import {FiInstagram} from "react-icons/fi";
import {BsFacebook} from "react-icons/bs";
import {FiTwitter} from "react-icons/fi";

function footer(){
    return(<footer>
        <a href="#" className="footer_logo">Hai Me</a>

        <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonails">Testimonials</a></li>
            <li><a href="#contact">Conact</a></li>
        </ul>

        <div className ="footer_socials">
            <a href="https://facebook.com" target="_blank"><FiInstagram/></a>
            <a href="https://instagram.com" target="_blank"><BsFacebook/></a>
            <a href="https://twitter.com" target="_blank"><FiTwitter/></a>
        </div>

        <div className="footer_copyright">
            <small>&copy;Pranav Here. All rigts reserved</small>

        </div>
    </footer>);
}
export default footer;