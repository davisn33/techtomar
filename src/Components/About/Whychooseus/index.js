import React from 'react'
import bg from "../../../Assets/india-banner.png"
import { Grid,withWidth  } from '@material-ui/core';

const Whychooseus = ({width}) => {
    return (
        <div style={{minHeight:"100vh",backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",
        display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Grid container style={{width:width==='xs'?"100%":"60%",background:"#F4F7FA",minHeight:"80vh",padding:20}}>
                <Grid item md={6} style={{display:"flex",alignItems: "flex-start",flexDirection:"column"}}>
                <div class="head1">Why Choose Us</div>
                <div class="head2">We Are The Experts In IT Solutions Services</div>
                <div style={{padding:12,background:"white",width:"90%",display:"flex",
                justifyContent:"flex-start",fontSize:12,fontWeight:"bold",marginTop:10,color:"#02254F"}}>
                Best Solution Provider Agency</div>
                <div style={{padding:12,background:"white",width:"90%",display:"flex",
                justifyContent:"flex-start",fontSize:12,fontWeight:"bold",marginTop:10,color:"#02254F"}}>
                Best Solution Provider Agency</div>
                <div style={{padding:12,background:"white",width:"90%",display:"flex",
                justifyContent:"flex-start",fontSize:12,fontWeight:"bold",marginTop:10,color:"#02254F"}}>
                Best Solution Provider Agency</div>
                </Grid>
                <Grid item md={6} style={{padding:10}}>
                <div class="head3" >The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be.
                        The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers
                </div>
                <img src={bg} alt ="bg" style={{width: "100%",marginTop: 50}}/>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default withWidth()(Whychooseus)
