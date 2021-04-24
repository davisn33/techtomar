import { Grid, TextField,InputAdornment,withStyles,Button,withWidth, Divider } from '@material-ui/core'
import React from 'react'
import mail from '../../Assets/mail.png'
import call from '../../Assets/call.png'
import location from '../../Assets/location.png'
import user from '../../Assets/user.png'
import mailicon from '../../Assets/mailicon.png'
import down from '../../Assets/down.png'
import edit from '../../Assets/edit.png'
import GoogleMapReact from 'google-map-react';
import AddIcon from '@material-ui/icons/AddCircleOutline';
import "./contact.scss"


const values=[
{
  image:mail,
  text:"Mail Here"
},
{
  image:call,
  text:"Call Us Now"
},
{
  image:location,
  text:"Visit Here"
},
]

const CssTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#ABD25D',
      },
    },
    '& label.Mui-focused': {
        color: '#ABD25D',
      },
    '& .MuiInputBase-root': {
        background: '#F4F4F4',
      },
  },
})(TextField);

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const CssButton = withStyles({
    root: {
        backgroundColor:"#2EB28C",
        color:"white",
        '&:hover': {
            backgroundColor: "#2EB28C",
        },
    },
  })(Button);

const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

const ContactMain = ({width}) => {
    const [select,setSelect] = React.useState(0);
    return (
        <div className="contact" style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
            <Grid container style={{width:width==='xs'?"100%":"70%",padding:20}}>



              <Grid item md={12} xs={12} onClick={()=>select!==1?setSelect(1):setSelect(0)} style={{display:"flex",justifyContent:"space-evenly",flexDirection:"column",height:50,cursor:"pointer"}}>
                <Divider/>
                <div style={{display:"flex",flexDirection:"row",color:"#555"}}><AddIcon style={{color:"blue"}}/>Invester Contacts</div>
              </Grid>
                {select===1&&values.map((item)=>
                <Grid item xs={12} md={4} style={{padding:20}} >
                    <div style={{background:"#eee",height:200,borderRadius:10,padding:10}}>
                        <img src={item.image} style={{width:70}}></img>
                        <h4>{item.text}</h4>
                        <div style={{color:"#555"}}>support@gmail.com</div>
                        <div style={{color:"#555"}}>www.techtomar.com</div>
                    </div>
                </Grid>)}


                <Grid item md={12} xs={12} onClick={()=>select!==2?setSelect(2):setSelect(0)} style={{display:"flex",justifyContent:"space-evenly",flexDirection:"column",height:50,cursor:"pointer"}}>
                <Divider/>
                <div style={{display:"flex",flexDirection:"row",color:"#555"}}><AddIcon style={{color:"blue"}}/>Media Contacts</div>
              </Grid>
                {select===2&&values.map((item)=>
                <Grid item xs={12} md={4} style={{padding:20}} >
                    <div style={{background:"#eee",height:200,borderRadius:10,padding:10}}>
                        <img src={item.image} style={{width:70}}></img>
                        <h4>{item.text}</h4>
                        <div style={{color:"#555"}}>support@gmail.com</div>
                        <div style={{color:"#555"}}>www.techtomar.com</div>
                    </div>
                </Grid>)}


                <Grid item md={12} xs={12} onClick={()=>select!==3?setSelect(3):setSelect(0)} style={{display:"flex",justifyContent:"space-evenly",flexDirection:"column",height:50,cursor:"pointer"}}>
                <Divider/>
                <div style={{display:"flex",flexDirection:"row",color:"#555"}}><AddIcon style={{color:"blue"}}/>Indian Office Contacts</div>
              </Grid>
                {select===3&&values.map((item)=>
                <Grid item xs={12} md={4} style={{padding:20}} >
                    <div style={{background:"#eee",height:200,borderRadius:10,padding:10}}>
                        <img src={item.image} style={{width:70}}></img>
                        <h4>{item.text}</h4>
                        <div style={{color:"#555"}}>support@gmail.com</div>
                        <div style={{color:"#555"}}>www.techtomar.com</div>
                    </div>
                </Grid>)}


                <Grid item md={12} xs={12} onClick={()=>select!==4?setSelect(4):setSelect(0)} style={{display:"flex",justifyContent:"space-evenly",flexDirection:"column",height:50,cursor:"pointer"}}>
                <Divider/>
                <div style={{display:"flex",flexDirection:"row",color:"#555"}}><AddIcon style={{color:"blue"}}/>German Office Contacts</div>
              </Grid>
                {select===4&&values.map((item)=>
                <Grid item xs={12} md={4} style={{padding:20}} >
                    <div style={{background:"#eee",height:200,borderRadius:10,padding:10}}>
                        <img src={item.image} style={{width:70}}></img>
                        <h4>{item.text}</h4>
                        <div style={{color:"#555"}}>support@gmail.com</div>
                        <div style={{color:"#555"}}>www.techtomar.com</div>
                    </div>
                </Grid>)}
                <Grid xs={12} md={12} style={{display:"flex",flexDirection:"column"}}><Divider/></Grid>


                <Grid item xs={12} md={12}>
                <h2 className="heading">Don't Hesitate To Contact Us</h2>
                </Grid>
                <Grid item xs={12} md={4} style={{padding:20}} >
                    <CssTextField label="Full Name Here" 
                    variant="outlined"
                    fullWidth
                    InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <img src={user} style={{width:20, height:20}}/>
                          </InputAdornment>
                        ),
                      }}
                    />
                </Grid>
                <Grid item xs={12} md={4} style={{padding:20}} >
                    <CssTextField label="Email Here" 
                    variant="outlined"
                    fullWidth
                    InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <img src={mailicon} style={{width:20, height:20}}/>
                          </InputAdornment>
                        ),
                      }}
                    />
                </Grid>
                <Grid item xs={12} md={4} style={{padding:20}} >
                    <CssTextField label="Subject" 
                    variant="outlined"
                    fullWidth
                    InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <img src={down} style={{width:20, height:20}}/>
                          </InputAdornment>
                        ),
                      }}
                    />
                </Grid>
                <Grid item xs={12} md={12} style={{padding:20}} >
                    <CssTextField label="Write Message" 
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <img src={edit} style={{width:20, height:20}}/>
                          </InputAdornment>
                        ),
                      }}
                    />
                </Grid>
                <Grid item xs={12} md={12} style={{padding:20}} >
                    <CssButton variant="contained" style={{width:250,height:60}}><div style={{fontSize:12,fontWeight:'bolder'}}>Send Message ➔</div></CssButton>
                </Grid>
                <Grid item xs={12} md={12} style={{ marginTop: 20}} >
                    <div style={{ height: '60vh', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyCeWSWDZK2GppHSExep7XthUAKB5qI2hsU" }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                            />
                        </GoogleMapReact>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default withWidth()(ContactMain)
