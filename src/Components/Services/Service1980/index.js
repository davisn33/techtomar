import React from 'react'
import { Grid,withWidth } from "@material-ui/core";
import "./service1980.scss"
import icon from "../../../Assets/service-icon.png"
const Service1980 = ({width}) => {
    return (
        <div style={{display: 'flex',alignItems: 'center',flexDirection: 'column',margin:10}}>
            <div className="head2" style={{width:width=='xs'?"100%":"40%",textAlign:"center",marginTop:20,fontSize:35}}>We've been providing our services with proud since 1980</div>
            <div className="head3" style={{width:width=='xs'?"100%":"50%",textAlign:"center",fontSize:17,marinTop:40}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius scelerisque rutrum. Nullam fringilla viverra luctus. Nam malesuada lorem at justo bibendum.</div>
            <Grid container style={{width:width=='xs'?"100%":"70%",marginTop:50}}>
                <Grid item xs={12} sm={6} md={6} style={{display: 'flex',flexDirection: 'column',justifyContent: 'flex-start'}}>
                    <img src={icon} alt ="service" style={{width:50}}/>
                    <div className="head2" style={{width:"80%",marginTop:20}}>Mobile Application DEsign And Dev</div>
                    <div className="head3" style={{width:"80%",fontSize:17,marinTop:40}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius scelerisque rutrum. Nullam fringilla viverra luctus. Nam malesuada lorem at justo bibendum, in mattis risus sagittis.</div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} style={{display: 'flex',flexDirection: 'column',justifyContent: 'flex-start'}}>
                    <img src={icon} alt ="service" style={{width:50}}/>
                    <div className="head2" style={{width:"80%",marginTop:20}}>Mobile Application DEsign And Dev</div>
                    <div className="head3" style={{width:"80%",fontSize:17,marinTop:40}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius scelerisque rutrum. Nullam fringilla viverra luctus. Nam malesuada lorem at justo bibendum, in mattis risus sagittis.</div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} style={{display: 'flex',flexDirection: 'column',justifyContent: 'flex-start'}}>
                    <img src={icon} alt ="service" style={{width:50}}/>
                    <div className="head2" style={{width:"80%",marginTop:20}}>Mobile Application DEsign And Dev</div>
                    <div className="head3" style={{width:"80%",fontSize:17,marinTop:40}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius scelerisque rutrum. Nullam fringilla viverra luctus. Nam malesuada lorem at justo bibendum, in mattis risus sagittis.</div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} style={{display: 'flex',flexDirection: 'column',justifyContent: 'flex-start'}}>
                    <img src={icon} alt ="service" style={{width:50}}/>
                    <div className="head2" style={{width:"80%",marginTop:20}}>Mobile Application DEsign And Dev</div>
                    <div className="head3" style={{width:"80%",fontSize:17,marinTop:40}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius scelerisque rutrum. Nullam fringilla viverra luctus. Nam malesuada lorem at justo bibendum, in mattis risus sagittis.</div>
                </Grid>
            </Grid>
        </div>
    )
}

export default withWidth()(Service1980)
