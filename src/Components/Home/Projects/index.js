import React from 'react'
import { Grid,withWidth } from "@material-ui/core";
import git from "../../../Assets/git-icon.png"
import vue from "../../../Assets/vue-icon.png"
import python from "../../../Assets/python-icon.png"
import "./projects.scss"

let images=[
    {
        src:vue,
        text:"Vue"
    },
    {
        src:git,
        text:"Git"
    },
    {
        src:python,
        text:"Python"
    }
]



const Product = ({width,softwarewurl,software}) => {
    return (
        <div style={{paddingTop:40,display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
            <h3 className="heading3">We Excel at Quality Software Development</h3>
            <p className="para">Our work on projects includes UI/UX, software development, testing, support and support
            and maintenance.
            We build software in time and apply latest technologies that optimize our work process.</p>
            <div style={{display: 'flex',justifyContent: 'center',width:"100%"}}>
            <Grid container style={{width:width==='xs'?"90%":"60%"}}>
                {software.map((t,i)=>{
                    return(
                        <Grid item xs={6} md={3} style={{display:"flex",justifyContent:"center",marginTop:15}}>
                            <div style={{width:180,height:110,border:"1px solid #8F9FC1",borderRadius:10,display:"flex",alignItems: 'center',justifyContent:"space-around"}}>
                               <img src={softwarewurl+"/"+t.image} alt={i} style={{width:40}}/>
                               <div>{t.name}</div>
                            </div>
                        </Grid>
                    )
                })
                }
                
            </Grid>
            </div>
        </div>
    )
}

export default withWidth()(Product);
