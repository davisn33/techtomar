import React from 'react'
import "./testimonials.scss";
import man from "../../../Assets/test-man.png";
import leftArrow from "../../../Assets/test-arrow-left.png";
import rightArrow from "../../../Assets/test-arrow-right.png";

const Testimonoals = () => {
    return(
        <div className="testimonial-container">
            <h1 >WHAT CLIENTS SAY?</h1>
            <img src={man} alt='' ></img>
            <div className="testimonial-quote">
                <h3>"Natus voluptatum enim quod necessitatibus quis expedita harum provident eos obcaecati id culpa corporis molestias."</h3>
            </div>
            <div style={{display: "flex",flexDirection: "column"}} className="testimonial-details">
                <span>STEVE JOBS</span>
                <span>Apple Inc.</span>
            </div>
            <div className="arrow" style={{textAlign:"center"}}>
                <img src={leftArrow} alt=''></img>
                <img src={rightArrow} alt=''></img>
            </div>
        </div>
    )
}

export default Testimonoals
