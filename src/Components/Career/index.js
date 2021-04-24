import { Grid,Button,withStyles } from '@material-ui/core'
import React from 'react'


const CssButton = withStyles({
    root: {
        backgroundColor:"#2EB28C",
        color:"white",
        '&:hover': {
            backgroundColor: "#2EB28C",
        },
    },
  })(Button);

const CareerMain = () => {
    return (
        <div style={{display:"flex",justifyContent:"center",background:"#F4F8FD"}}>
            <Grid container style={{width:"80%"}}>
                {[1,1,1,1].map(()=>
                <Grid item md={6} style={{padding:20}}>
                    <div style={{background:"white",borderRadius:5,display:"flex",padding:30,flexDirection:"column",alignItems:"flex-start"}}>
                        <h2 style={{color:"#333232"}}>Web Designer</h2>
                        <div>
                            <div>Type:<span style={{color:"#444"}}> Part-time</span> Other:<span style={{color:"#444"}}> Something</span> </div>
                        </div>
                        <div style={{marginTop:20,textAlign:"left",fontSize:13,paddingRight:20,color:"#555"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <CssButton variant="contained" style={{width:170,height:45,marginTop:20}}><div style={{fontSize:12,fontWeight:'bolder'}}>Read More ➔</div></CssButton>
                    </div>
                </Grid>)}
            </Grid>
            
        </div>
    )
}

export default CareerMain
