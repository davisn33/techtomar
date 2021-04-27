import { Grid,Button,withStyles,withWidth} from '@material-ui/core'
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

const CareerMain = ({width,careerlist}) => {
    
    return (
        <div style={{display:"flex",justifyContent:"center",background:"#F4F8FD"}}>
            <Grid container style={{width:width==='xs'?"95%":"80%"}}>
                {careerlist.map((item)=>
                <Grid item md={6} style={{padding:20}}>
                    <div style={{background:"white",borderRadius:5,display:"flex",padding:30,flexDirection:"column",alignItems:"flex-start"}}>
                        <h2 style={{color:"#333232"}}>{item.name}</h2>
                        <div style={{fontWeight:"bold",display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                            <div>Type:<span style={{color:"#444",fontWeight:"normal"}}> {item.work_status}</span> Exp:<span style={{color:"#444",fontWeight:"normal"}}> {item.exp}</span> </div>
                        
                            <div>Vacancy:<span style={{color:"#444",fontWeight:"normal"}}> {item.vacancy}</span> </div>
                        </div>
                        <div style={{marginTop:20,textAlign:"left",fontSize:13,paddingRight:20,color:"#555"}}>
                        {item.description}
                        </div>
                        <CssButton variant="contained" style={{width:170,height:45,marginTop:20}}><div style={{fontSize:12,fontWeight:'bolder'}}>Read More ➔</div></CssButton>
                    </div>
                </Grid>)}
            </Grid>
            
        </div>
    )
}

export default withWidth()(CareerMain)
