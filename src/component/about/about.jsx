import React from "react";
import "./about.css";
import ME from "../../assets/me-2.png"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {AiFillFolder} from "react-icons/ai"

function about() {
    return (<section id="about">
        <h5>Get to know</h5>
        <h2>About me</h2>

        <div className="container about_container">
            <div className="about_me">
             <div className="about_me-image">
                <img src={ME} alt="About things" />
             </div>
            </div>

        <div className="about_content">
            <div className="about_cards">
                <article className="about_card">
                    <FaAward className="about_icon"/>
                    <h5>Experience</h5>
                    <small>3+ yrs of exp</small>
                </article>
                <article className="about_card">
                    <FiUsers className="about_icon"/>
                    <h5>Clients</h5>
                    <small>0+ clients</small>
                </article>
                <article className="about_card">
                    <AiFillFolder className="about_icon"/>
                    <h5>Projects</h5>
                    <small>First one</small>
                </article>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, alias? Id sapiente, delectus quod perferendis vel mollitia veniam nostrum, non voluptate repellendus nulla unde. Possimus ea distinctio ipsa architecto eligendi.
                </p>

                <a href="#contact" className="btn btn-primary"> Let's Talk</a> 
            
        </div>
        </div>
    </section>);
}
export default about;