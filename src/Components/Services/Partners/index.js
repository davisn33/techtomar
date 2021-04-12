import React from 'react'
import { Grid,withWidth } from "@material-ui/core";
import logo1 from "../../../Assets/logo1.png"
import logo2 from "../../../Assets/logo2.png"
import logo3 from "../../../Assets/logo3.png"
import logo4 from "../../../Assets/logo4.png"
import logo5 from "../../../Assets/logo5.png"
import logo6 from "../../../Assets/logo6.png"
import logo7 from "../../../Assets/logo7.png"
import logo8 from "../../../Assets/logo8.png"
import logo9 from "../../../Assets/logo9.png"
import logo10 from "../../../Assets/logo10.png"
import logo11 from "../../../Assets/logo11.png"
import logo12 from "../../../Assets/logo12.png"
import logo13 from "../../../Assets/logo13.png"


const Service1980 = ({width}) => {
    return (
        <div style={{display: 'flex',alignItems: 'center',flexDirection: 'column',marginTop:40,marginBottom:40}}>
            <div className="head2" style={{width:width==='xs'?"100%":"40%",textAlign:"center",marginTop:20,fontSize:35}}>OUR TRUSTED PARTNERS</div>
            <div className="head3" style={{width:width==='xs'?"100%":"50%",textAlign:"center",fontSize:17,marinTop:40}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius scelerisque rutrum. Nam malesuada lorem at justo bibendum.</div>
            <Grid container style={{width:width==='xs'?"100%":"70%",marginTop:50,display:"flex",justifyContent:"center"}}>
                <img src={logo1} alt ="logo" style={{width:130,margin:20}}/>
                <img src={logo2} alt ="logo1" style={{width:130,margin:20}}/>
                <img src={logo3} alt ="logo2" style={{width:130,margin:20}}/>
                <img src={logo4} alt ="logo3" style={{width:130,margin:20}}/>
                <img src={logo5} alt ="logo4" style={{width:130,margin:20}}/>
                <img src={logo6} alt ="logo5" style={{width:130,margin:20}}/>
                <img src={logo7} alt ="logo6" style={{width:130,margin:20}}/>
                <img src={logo8} alt ="logo7" style={{width:130,margin:20}}/>
                <img src={logo9} alt ="logo8" style={{width:130,margin:20}}/>
                <img src={logo10} alt ="logo9" style={{width:130,margin:20}}/>
                <img src={logo11} alt ="logo10" style={{width:130,margin:20}}/>
                <img src={logo12} alt ="logo11" style={{width:130,margin:20}}/>
                <img src={logo13} alt ="logo12" style={{width:130,margin:20}}/>
            </Grid>
        </div>
    )
}

export default withWidth()(Service1980)
