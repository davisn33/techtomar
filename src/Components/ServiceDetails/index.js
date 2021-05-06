import React from 'react'
import bg from "../../Assets/slider.png"
import image from "../../Assets/india-banner.png"
import main from "../../Assets/india-banner.png"
import "./servicedetails.scss"
import {Grid, withWidth} from "@material-ui/core"

const ServiceDetailMain = ({width}) => {
    return (
        <div className="servicedetails">
            <div className="head" style={{backgroundImage: `url(${bg})`}}>
               <div style={{width:width==='xs'?"100%":"60%",flexDirection:width==='xs'?"column":"row",marginTop:50}}>
                    <div className="heading" style={{width:width==='xs'?"100%":"60%"}}>
                        <h1>
                            Web Development Professionals
                        </h1>
                        <div>
                            Create Responsive Multi-Purpose Web Solutions
                        </div>
                    </div>
                    <div className="bgimage" style={{width:width==='xs'?"100%":"40%"}}>
                        <img src={image} alt="servicedetails" style={{width:"100%"}}/>
                    </div>
               </div>
            </div>
            <div className="details">
                <div style={{width:width==='xs'?"100%":"60%"}}>
                    <h1 style={{fontSize:width==='xs'?20:32}}>WEB DEVELOPMENT SERVICES WE PROVIDE</h1>
                    <img src={main} alt="sdmain"/>
                    <Grid container>
                    {["Analysis","Development","Wireframe","Testing"].map((item)=>
                    <Grid item xs={12} md={6} >
                        <div style={{padding:10}}>
                            <h3>{item}</h3>
                            <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                    </Grid>
                    )
                    }   
                </Grid>
                
                </div>
                
                
            </div>

            {/* <div style={{ width: "100%" ,minHeight:"50vh",background: "linear-gradient(90deg, rgba(28,174,149,1) 20%, rgba(171,209,95,1) 60%)"}}>
                    <Grid container>
                        <Grid item xs={12} md={6} style={{display:"flex", justifyContent:"center",alignItems:"center",minHeight:"50vh"}}>
                            www
                        </Grid>
                        <Grid item xs={12} md={6} style={{display:"flex",minHeight:"50vh",alignItems:"center"}}>
                            ddd
                        </Grid>
                    </Grid>
            </div> */}
        </div>
    )
}

export default withWidth()(ServiceDetailMain)
