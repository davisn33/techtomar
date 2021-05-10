import { Grid,withWidth  } from '@material-ui/core';
import React from 'react'
import hifun from "../../../Assets/hifun.png"
import "./whoweare.scss"

const Whoweare = ({width,heading,title,description,image}) => {
    const [more,setMore] = React.useState(false);
    return (
        <div style={{display: 'flex',justifyContent: 'center',marginTop:40}}>
            <Grid container style={{width:width=='xs'?"100%":"65%"}}>
                <Grid xs={12} sm={12} md={6} item style={{color:"white",height:"60vh",backgroundImage:`url(${image})`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></Grid>
                <Grid xs={12} sm={12} md={6} item style={{height:"60vh",padding:"0px 40px",display:"flex",alignItems:"flex-start",flexDirection:"column"}}>
                    <div class="head1"><img src={hifun} style={{height:12,marginRight:10}}/>{heading}</div>
                    <div class="head2">{title}</div>
                    <div class="head3">{more?description:description.substring(0,160)+"..."}</div>
                    <div class="learnmore" onClick={()=>setMore(!more)}>
                        READ {!more?"MORE":"LESS"}
                    </div>
                </Grid>
            </Grid> 
        </div>
    )
}

export default withWidth()(Whoweare);
