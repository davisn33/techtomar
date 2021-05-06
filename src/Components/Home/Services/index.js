import React from "react";
import "./services.scss";
import Card from "./cards";
import serviceImage from "../../../Assets/service-icon.png";
import webImage from "../../../Assets/service-icon1.png";
import AnalyticImage from "../../../Assets/service-icon2.png";
import cloudImage from "../../../Assets/service-icon3.png";
import productImage from "../../../Assets/service-icon4.png";
import databaseImage from "../../../Assets/service-icon5.png";
import { Grid } from "@material-ui/core";
import {useHistory} from "react-router-dom"
const Services = ({img_url,services}) => {
    let history=useHistory();
    return (
        <div style={{ background: '#80808029',paddingBottom:40 }}>
            <div className="services-container">
                <h2>IT Services</h2>
                <p>Map a strategy, build a solution or elevate your product experience with foucsed engagements available as standalone offerings or as part of your project's service stack.</p>
                <div style={{display:"flex",justifyContent:"center"}}>
                <Grid container style={{width:"65%"}}>
                    {[...services,...services,...services].map((item,i)=>
                    <Grid item xs={12} sm={6} md={4} style={{display:"flex",justifyContent:"center",
                    
                    padding: 30,
                    margin: "10px 0px",
                    }} onClick={()=>{history.push("/service/"+item.id)}}>
                        <Card cardImage={img_url+"/"+item.image} number={"0"+(i+1).toString()} cardTitle={item.title} description={item.description}/>
                        
                    </Grid>
                    )}
                </Grid>
                </div>
            </div>
        </div>
    )
}
export default Services;