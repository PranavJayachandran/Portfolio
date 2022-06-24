import "./contact.css";
import {AiOutlineMail} from "react-icons/ai";
import {AiFillFacebook} from "react-icons/ai";
import {AiOutlineWhatsApp} from "react-icons/ai";
import React from 'react';
import { useState as UseState, useRef as UseRef } from "react";
import emailjs from '@emailjs/browser';

const contact=()=>{
    const form=UseRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_u4v9rxi', 'template_tkxie5v', form.current, '6JM6S7vmhW3mEShFI')
          e.target.reset();
      };
    return (<section id="contact">
        <h5>Get in touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact_container">
            <div className="contact_options">
                <article className="contact_option">
                <AiOutlineMail className="contact_option-icon"/>
                    <h4>Email</h4>
                    <h5>Send a mail</h5>
                    <a href="mailto:pranavjay02@gmail.com" target="_blank">Send a message
                    </a>
                </article>

                <article className="contact_option">
                <AiFillFacebook className="contact_option-icon"/>
                    <h4>Messenger</h4>
                    <h5>Text Me on Facebook</h5>
                    <a href="http://www.instagram.com/pranav.jayachandran" target="_blank">Send a message
                    </a>
                </article>

                <article className="contact_option">
                <AiOutlineWhatsApp className="contact_option-icon"/>
                    <h4>Whatsapp</h4>
                    <h5>Let's talk over a chat</h5>
                    <a href="https://api.whatsapp.com/send?phone=9995852941" target="_blank">Send a message
                    </a>
                </article>

                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name"placeholder="Your Full Name" required></input>
                    <input type="email" name="email" placeholder="Your email" required></input>
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            
        </div>
        </section>);
}
export default contact;