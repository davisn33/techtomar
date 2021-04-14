import React from 'react'
import "./footer.scss";
import footerLogo from "../../Assets/tech.png";
import fb from "../../Assets/facebook.png"
import li from "../../Assets/linkedin.png";
import yt from "../../Assets/youtube.png";
import google from "../../Assets/gmail.png";
import twit from "../../Assets/twitter.png";
import {Grid} from "@material-ui/core"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "center", background: "#000000d9" }}>
                <div style={{width:"70%"}}>
                    <Grid container className="footer-container">
                        <Grid item className="footer-logo-quote text">
                            <img src={footerLogo} alt="flogo" style={{ width: 100,marginTop:20 }}></img>
                            <div>
                                <p style={{ width: 200 }}>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                            </div>
                        </Grid>
                        <Grid item className="footer-useful text">
                            <p className="footer-title">Useful Links</p>
                            <p><Link to="/about" style={{textDecoration: 'none',color:'gray'}}>About us</Link></p>
                            <p>Portfolio</p>
                            <p>Career</p>
                            <p>Blogs</p>
                            <p>Contact Us</p>
                        </Grid>
                        <Grid item className="footer-services text">
                            <p className="footer-title">Services</p>
                            <p>Web Development</p>
                            <p>Mobile App Development</p>
                            <p>Cloud Telephony</p>
                            <p>Custom Software</p>
                        </Grid>
                        <Grid item className="footer-follow text">
                            <p className="footer-title">Follow Us On</p>
                            <div style={{ display: "flex" }}>
                                <img src={fb} alt=''></img>
                                <img src={li} alt=''></img>
                                <img src={yt} alt=''></img>
                                <img src={google} alt=''></img>
                                <img src={twit} alt=''></img>
                            </div>
                            <p>Privacy Notice</p>
                            <p>Cookie Policy</p>
                            <p>Customise Cookies</p>
                            <p>Disclaimer</p>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className="copy-right">
                <span>Copyright &copy;	2021. All Rights Reserved. Privacy Policy | Terms &amp;	Condition</span>
            </div>
        </div>
    )
}

export default Footer
