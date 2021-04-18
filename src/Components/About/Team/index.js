import React from 'react'
import { Grid,withWidth  } from '@material-ui/core';
import bg from "../../../Assets/india-banner.png"

const Team = ({width}) => {
    return (
        <div style={{display: 'flex',alignItems: 'center',flexDirection: 'column'}}>
            <div className="head1" style={{marginTop:50}}>Team</div>
            <div className="head2">Our Qualified Agents</div>
           <Grid container style={{width:width=='xs'?"100%":"70%",marginTop:50}}>
                <Grid item md={4} style={{padding:width=='xs'?0:10}}>
                    <img src={bg} style={{width:width=='xs'?"100%":300,height:300}}/>
                    <h3 style={{color:"#01234A"}}>Hunter Chapman</h3>
                    <h6 style={{color:"#999",fontWeight:"normal",fontSize:14,marginTop:0}}>Co-Founder</h6>
                </Grid>
                <Grid item md={4} style={{padding:width=='xs'?0:10}}>
                    <img src={bg} style={{width:width=='xs'?"100%":300,height:300}}/>
                    <h3 style={{color:"#01234A"}}>Hunter Chapman</h3>
                    <h6 style={{color:"#999",fontWeight:"normal",fontSize:14,marginTop:0}}>Co-Founder</h6>
                </Grid>
                <Grid item md={4} style={{padding:width=='xs'?0:10}}>
                    <img src={bg} style={{width:width=='xs'?"100%":300,height:300}}/>
                    <h3 style={{color:"#01234A"}}>Hunter Chapman</h3>
                    <h6 style={{color:"#999",fontWeight:"normal",fontSize:14,marginTop:0}}>Co-Founder</h6>
                </Grid>
           </Grid> 
        </div>
    )
}

export default withWidth()(Team)
