import { Grid } from '@material-ui/core'
import React from 'react'
import food from "../../../Assets/industrybg.png"

const Food = () => {
    return (
        <div style={{background: '#F5F9FD'}}>
            <Grid container>
                <Grid item md={6} style={{display: 'flex',justifyContent: 'flex-end'}}>
                    <div style={{display: 'flex',alignItems: 'flex-start',flexDirection: 'column',width:400,marginTop:50}}>
                        <h1 style={{color:"#1CAF95",textAlign:"left"}}>
                            FOOD DELIVERY APP
                        </h1>
                        <div style={{display:"flex",textAlign:"left",color:"#5F5E5F",fontSize:17}}>
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                        </div>
                        <div style={{background:"linear-gradient(90deg, rgba(28,174,149,1), rgba(171,209,95,1))",
                        padding:"15px 30px",color:"white",fontSize:20,fontWeight:800,marginTop:30}}>
                            VIEW CASE
                        </div>
                    </div>
                </Grid>
                <Grid item md={6}>
                    <img src={food} alt="food" style={{width:"100%",height:500,objectFit:"cover"}}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Food
