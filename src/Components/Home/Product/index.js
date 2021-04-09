import React from 'react'
import { Grid } from "@material-ui/core";
import "./product.scss"
import bg1 from "../../../Assets/food-banner.png"
import bg2 from "../../../Assets/india-banner.png"


const Product = () => {
    return (
        <div style={{background: '#80808029', paddingTop:40,display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
            <h3 className="heading12">Product</h3>
            <p className="para1">TechoMar Mobile App Developers have produced successful applications in wide range of use cases.</p>
            <Grid container>
                
                <Grid item xs={12} sm={12} md={6} className="item" style={{backgroundImage:`url(${bg1})`}}>
                    <div>
                        <h2>Online Food Delivery</h2>
                        <p>We Help You Launch Your Idea Fast and With in Budget</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className="item" style={{backgroundImage:`url(${bg2})`}}>
                    <div>
                        <h2>Quality Is The Best Business Plan</h2>
                        <p>We Help Your Business Grow & Succeed</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Product;
