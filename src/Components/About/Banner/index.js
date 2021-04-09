import React from 'react';
import bg from "../../../Assets/india-banner.png"

const Banner = ({text,img}) => {
    return (
        <div style={{height:"60vh",backgroundImage:`url(${bg})`,display:"flex",alignItems:'center',justifyContent: 'center',backgroundPosition:"center"}}>
            <div>
                <div style={{color:"white",fontSize:40,fontWeight:"bolder"}}>{text}</div>
                <div style={{color:"white",marginTop:10}}><span style={{color:"#AAD05D"}}>Home </span>|| {text}</div>
            </div>
        </div>
    )
}

export default Banner
