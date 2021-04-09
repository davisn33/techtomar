import { Grid,withWidth  } from '@material-ui/core';
import React from 'react'
import bg from "../../../Assets/india-banner.png"
import "./whoweare.scss"

const Whowewre = ({width}) => {
    return (
        <div style={{display: 'flex',justifyContent: 'center',marginTop:40}}>
            <Grid container style={{width:width=='xs'?"100%":"65%"}}>
                <Grid xs={12} sm={12} md={6} item style={{color:"white",height:"60vh",backgroundImage:`url(${bg})`,backgroundPosition:"center"}}></Grid>
                <Grid xs={12} sm={12} md={6} item style={{height:"60vh",padding:"0px 40px",display:"flex",alignItems:"flex-start",flexDirection:"column"}}>
                    <div class="head1">WHO  WE  ARE</div>
                    <div class="head2">More than 20+ years we provide IT solutions</div>
                    <div class="head3">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.
                        The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers
                    </div>
                    <div class="learnmore">
                        LEARN MORE
                    </div>
                </Grid>
            </Grid> 
        </div>
    )
}

export default withWidth()(Whowewre);
