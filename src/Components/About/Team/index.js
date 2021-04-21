import React from 'react'
import { Grid,withWidth  } from '@material-ui/core';
import bg from "../../../Assets/india-banner.png"

const Team = ({width,team,baseurl}) => {
    return (
        <div style={{display: 'flex',alignItems: 'center',flexDirection: 'column'}}>
            <div className="head1" style={{marginTop:50}}>{team.title}</div>
            <div className="head2">{team.description}</div>
           <Grid container style={{width:width=='xs'?"100%":"70%",marginTop:50}}>
               {team.agents.map((item,i)=>
                <Grid item md={4} style={{padding:width=='xs'?0:10}} key={i}>
                    <img src={baseurl+"/"+item.image} style={{width:width=='xs'?"100%":300,height:300}}/>
                    <h3 style={{color:"#01234A"}}>{item.name}</h3>
                    <h6 style={{color:"#999",fontWeight:"normal",fontSize:14,marginTop:0}}>{item.designation}</h6>
                </Grid>
               )}
           </Grid> 
        </div>
    )
}

export default withWidth()(Team)
