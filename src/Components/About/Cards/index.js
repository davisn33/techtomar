import React from 'react'
import { Grid,withWidth  } from '@material-ui/core';
import icon from "../../../Assets/service-icon.png"
const Cards = ({width,services,baseurl}) => {
    return (
        <div style={{display: 'flex',justifyContent: 'center',marginTop:40,background:"#F4F7FA",padding:"40px 0px"}}>
            <Grid container style={{width:width=='xs'?"100%":"65%"}}>
                {services.map((item,i)=>
                <Grid xs={12} sm={12} md={4} item style={{minHeight:300,display:"flex",alignItems:"center",flexDirection:"column",padding:"20px 10px"}}>
                    <div style={{background:"#fff", borderRadius:10,display:"flex",alignItems:"center",flexDirection:"column",padding:"20px 10px"}}>
                    <img src={baseurl+"/"+item.image} alt="icon" style={{width:70}}/>
                    <h3 style={{color:"#02244A",fontWeight:750}}>{item.title}</h3>
                    <div style={{color:"grey"}}>{item.description}</div>
                    <div style={{color:"#2FA58E",padding:"10px 30px",border:"solid 1px #2FA58E",borderRadius:5,fontWeight:"bold",marginTop:20,background:"#F4F7FA"}}>READ MORE</div>
                    </div>
                </Grid>
                )}
            </Grid> 
            
        </div>
    )
}

export default withWidth()(Cards)
