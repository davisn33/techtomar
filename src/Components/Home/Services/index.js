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

const Services = () => {
    return (
        <div style={{ background: '#80808029',paddingBottom:40 }}>
            <div className="services-container">
                <h2>IT Services</h2>
                <p>Map a strategy, build a solution or elevate your product experience with foucsed engagements available as standalone offerings or as part of your project's service stack.</p>
                <div style={{display:"flex",justifyContent:"center"}}>
                <Grid container style={{width:"85%"}}>
                    <Grid item xs={12} sm={6} md={4} style={{display:"flex",justifyContent:"center"}}>
                        <Card cardImage={serviceImage} number='01' cardTitle='Software Development' />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{display:"flex",justifyContent:"center"}}>
                    <Card cardImage={webImage} number='02' cardTitle='Web Development' />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{display:"flex",justifyContent:"center"}}>
                    <Card cardImage={AnalyticImage} number='03' cardTitle='Analytic Solutions' />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{display:"flex",justifyContent:"center"}}>
                    <Card cardImage={cloudImage} number='04' cardTitle='Cloud &amp; DevOps' />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{display:"flex",justifyContent:"center"}}>
                    <Card cardImage={productImage} number='05' cardTitle='Product &amp; Design' />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{display:"flex",justifyContent:"center"}}>
                    <Card cardImage={databaseImage} number='06' cardTitle='Database Administrator' />
                    </Grid>
                </Grid>
                </div>
            </div>
        </div>
    )
}
export default Services;