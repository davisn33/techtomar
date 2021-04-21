import { Grid,withWidth  } from '@material-ui/core';
import React from 'react'
import bg from "../../../Assets/india-banner.png"
import "./whoweare.scss"

const Whowewre = ({width,heading,title,description,image}) => {
    return (
        <div style={{display: 'flex',justifyContent: 'center',marginTop:40}}>
            <Grid container style={{width:width=='xs'?"100%":"65%"}}>
                <Grid xs={12} sm={12} md={6} item style={{color:"white",height:"60vh",backgroundImage:`url(${image})`,backgroundPosition:"center"}}></Grid>
                <Grid xs={12} sm={12} md={6} item style={{height:"60vh",padding:"0px 40px",display:"flex",alignItems:"flex-start",flexDirection:"column"}}>
                    <div class="head1">{heading}</div>
                    <div class="head2">{title}</div>
                    <div class="head3">{description}</div>
                    <div class="learnmore">
                        LEARN MORE
                    </div>
                </Grid>
            </Grid> 
        </div>
    )
}

export default withWidth()(Whowewre);
