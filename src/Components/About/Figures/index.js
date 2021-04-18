import React from 'react'
import "./figures.scss"
import { Grid,withWidth  } from '@material-ui/core';


const Figures = () => {
    return (
        <div style={{minHeight:"70vh",display: "flex",alignItems: "center",justifyContent: "center"}}>
            <Grid container>
                <Grid item xs={12} md={4} >
                    <div className="figure">16k</div>
                    <div className="figure-text">Global Customers</div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className="figure">350+</div>
                    <div className="figure-text">Completed Projects</div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className="figure">460+</div>
                    <div className="figure-text">Expert Workers</div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Figures
