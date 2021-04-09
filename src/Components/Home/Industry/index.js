import React from 'react'
import { Grid } from "@material-ui/core";
import bg from "../../../Assets/industrybg.png"
import "./industry.scss"


const Industry = () => {
    return (
        <div >

            <Grid container>

                <Grid item xs={12} sm={12} md={12} className="items" style={{ backgroundImage: `url(${bg})` }}>
                    <h2 className="heading2">Wide Industry Exposure</h2>
                    <p className="para1">TechoMar Mobile App Developers have produced successful applications in wide range of use cases.</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default Industry;
