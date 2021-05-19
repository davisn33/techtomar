import React from 'react'
import "./footer.scss";
import footerLogo from "../../Assets/tech.png";
import fb from "../../Assets/facebook.png"
import li from "../../Assets/linkedin.png";
import yt from "../../Assets/youtube.png";
import google from "../../Assets/gmail.png";
import insta from "../../Assets/insta.png";
import twit from "../../Assets/twitter.png";
import {Grid} from "@material-ui/core"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "center", background: "#000000d9" }}>
                <div style={{width:"60%"}}>
                    <Grid container className="footer-container">
                        <Grid item className="footer-logo-quote text">
                            <Link to="/">
                                <img src={footerLogo} alt="flogo" style={{ width: 100,marginTop:20 }}></img>
                            </Link>
                            <div style={{color:"white"}}>this is a dummy text for the wensite, please ignore this is a dummy text for the wensite, please ignore</div>
                        </Grid>
                        <Grid item className="footer-useful text">
                            <p className="footer-title">Useful Links</p>
                            <p><Link to="/about" style={{textDecoration: 'none',color:'gray'}}>About us</Link></p>
                            <p><Link to="/product" style={{textDecoration: 'none',color:'gray'}}>Products</Link></p>
                            <p><Link to="/career" style={{textDecoration: 'none',color:'gray'}}>Career</Link></p>
                            <p><Link to="/services" style={{textDecoration: 'none',color:'gray'}}>Service</Link></p>
                            <p><Link to="/contact" style={{textDecoration: 'none',color:'gray'}}>Contact Us</Link></p>
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
                                <a href="https://www.facebook.com/techtomargroup"><img  src={fb} alt=''></img></a>
                                <a href="https://www.linkedin.com/company/tech-tomar"><img src={li} alt=''></img></a>
                                <a href="https://www.youtube.com/channel/UCnvnqoFVqMxrpY2V_GP3SOg"><img src={yt} alt=''></img></a>
                                <a href="https://www.instagram.com/techtomargroup"><img src={insta} alt=''></img></a>
                            </div>
                            <p><Link to="/privacy" style={{textDecoration: 'none',color:'gray'}}>Privacy Notice</Link></p>
                            <p><Link to="/cookies" style={{textDecoration: 'none',color:'gray'}}>Cookie Policy</Link></p>
                            <p><Link to="/customize" style={{textDecoration: 'none',color:'gray'}}>Customise Cookies</Link></p>
                            <p><Link to="/disclaimer" style={{textDecoration: 'none',color:'gray'}}>Disclaimer</Link></p>
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
