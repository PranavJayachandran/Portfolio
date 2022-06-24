import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import {Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


const data=[
    {
        avatar:AVTR1,
        name:"ABC",
        review:"asidasdasddasd"
    },
    {
        avatar:AVTR2,
        name:"ABC",
        review:"asidasdasddasd"
    },
    {
        avatar:AVTR3,
        name:"ABC",
        review:"asidasdasddasd"
    },
    {
        avatar:AVTR4,
        name:"ABC",
        review:"asidasdasddasd"
    },
]
function testimonials(){
    return(<section id="testimonials">
        <h5>Review from Clients</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonials_container"
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation={{ clickable: true }}>
            {
                data.map(({avatar,name,review},index)=>{
                    return(
                      <SwiperSlide key={index}className="testimonials">
                <div className="client_avatar">
                    <img src={avatar} alt="Avatar one"/>
                </div>
                <h5 className="client_name">{name}</h5>
                    <small className="client_review">
                        {review}
                    </small>
                    </SwiperSlide> 
                    )
                })
            }
        </Swiper>
    </section>);
}
export default testimonials;