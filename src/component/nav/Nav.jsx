import React from "react";
import "./nav.css";
import {AiFillHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {AiFillBook} from "react-icons/ai";
import {RiServiceLine} from "react-icons/ri";
import {AiFillMessage} from "react-icons/ai";

function Nav(){
    const [activeNav,setActiveNav]=React.useState("#"); 
    return(<nav>
        <a href="#" onClick={()=>setActiveNav("#")}className={activeNav==='#'?'active':''}><AiFillHome/></a>
        <a href="#about" onClick={()=>setActiveNav("#about")} className={activeNav==='#about'?'active':''} ><AiOutlineUser/></a>
        <a href="#experience" onClick={()=>setActiveNav("#experience")} className={activeNav==='#experience'?'active':''}><AiFillBook/></a>
        <a href="#services" onClick={()=>setActiveNav("#services")} className={activeNav==='#services'?'active':''}><RiServiceLine/></a>
        <a href="#contact" onClick={()=>setActiveNav("#contact")} className={activeNav==='#contact'?'active':''}><AiFillMessage/></a>
    </nav>);
}

export default Nav;