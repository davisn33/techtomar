import React from "react";
import "./cards.scss";

const Cards=(props)=>{ 
        return(
            <div className="card-container">
                <div className="card-top">
                    <img src={props.cardImage} style={{width:50,height:50}} alt=''></img>
                    <span>{props.number}</span>
                </div>
                <div className="card-bottom">
                    <h3>{props.cardTitle}</h3>
                    <span>{props.description}</span>
                </div>
            </div>
        )
}

export default Cards;