import React from "react";
import "./cards.scss";

const Cards=(props)=>{ 
        return(
            <div className="card-container">
                <div className="card-top">
                    <img src={props.cardImage} alt=''></img>
                    <span>{props.number}</span>
                </div>
                <div className="card-bottom">
                    <h3>{props.cardTitle}</h3>
                    <span>At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database</span>
                </div>
            </div>
        )
}

export default Cards;