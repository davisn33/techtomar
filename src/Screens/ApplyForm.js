import { Button, Checkbox, MenuItem, TextField, withStyles } from '@material-ui/core';
import React from 'react'
import Banner from '../Components/About/Banner';
import bannerimg from "../Assets/service-banner-bg.png"
import { useHistory } from "react-router-dom";
import { getCareerDetail } from '../Services/api';

const CssTextField = withStyles({
    root: {
      '& fieldset':{
        borderRadius: 10,
        color:"green"
      },
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: '#ABD25D',
          borderWidth:2
        },
      },
    },
    
  })(TextField);

  const CssButton = withStyles({
    root: {
        backgroundColor:"#2EB28C",
        color:"white",
        '&:hover': {
            backgroundColor: "#2EB28C",
        },
    },
  })(Button);


  const GreenCheckbox = withStyles({
    root: {
      color:"#1CAE94",
      '&$checked': {
        color:"#1CAE94",
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  const languages = [
    {
      value: 'German / Deutsch',
      label: 'German / Deutsch',
    },
    {
      value: 'English',
      label: 'English',
    },
    {
      value: 'French / Français',
      label: 'French / Français',
    },
  ];


const ApplyForm = (props) => {
    const history=useHistory()
    const [first,setFirst] = React.useState("");
    const [last,setLast] = React.useState("");
    const [mobile,setMobile] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [lang,setLang] = React.useState('German / Deutsch');
    const [street,setStreet] = React.useState("");
    const [zip,setZip] = React.useState("");
    const [city,setCity] = React.useState("");
    const [error,setError] = React.useState("");
    const [privacy,setPrivacy] = React.useState(false);
    const [datarelease,setDatarelease] = React.useState(false);
    const [resume,setResume] = React.useState("");
    const [motivation,setMotivation] = React.useState("");
    const [name,setName] = React.useState("");

    React.useEffect(()=>{
      let lang=localStorage.getItem("lang");
      getCareerDetail(lang,props.match.params.id)
      .then(res=>{
        setName(res.data.data.name)
      })
      .catch((e)=>console.log(e))
    },[])

    const handleClick=()=>{
        setError("")
        if(!first)
            setError("Please Enter First Name")
        else if(!privacy)
            setError("Please Agree With Privacy Policy")
        else{
            //
        }

    }

    return (
        <>
        <Banner text="Career" img={bannerimg}/>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            
            <div style={{padding:50,width:"50%",display:"flex",flexDirection:"column"}}>

            <h2 style={{textAlign:"left"}}>{`Apply for ${name}`}</h2>
            <CssTextField value={first} fullWidth style={{marginTop:50}} onChange={(e)=>setFirst(e.target.value)} label="First name*" variant="outlined"/>
            <CssTextField value={last} fullWidth style={{marginTop:50}} onChange={(e)=>setLast(e.target.value)} label="Last name" variant="outlined"/>
            <CssTextField value={mobile} fullWidth style={{marginTop:50}} onChange={(e)=>setMobile(e.target.value)} label="Mobile No." variant="outlined"/>
            <CssTextField value={email} fullWidth style={{marginTop:50}} onChange={(e)=>setEmail(e.target.value)} label="Email" variant="outlined"/>

            <CssTextField
                id="standard-select-currency"
                select
                label="Language"
                value={lang}
                onChange={(e)=>{setLang(e.target.value)}}
                variant="outlined"
                style={{marginTop:50}}
            >
                {languages.map((option) => (
                    <MenuItem key={option.value} value={option.value} style={{textAlign:"left"}}>
                        {option.label}
                    </MenuItem>
                ))}
            </CssTextField>

            <CssTextField value={street} fullWidth style={{marginTop:50}} onChange={(e)=>setStreet(e.target.value)} label="Street" variant="outlined"/>
            <CssTextField value={zip} fullWidth style={{marginTop:50}} onChange={(e)=>setZip(e.target.value)} label="ZIP/Postal code" variant="outlined"/>
            <CssTextField value={city} fullWidth style={{marginTop:50}} onChange={(e)=>setCity(e.target.value)} label="City" variant="outlined"/>
            
            <div style={{display:"flex",alignItems:"center",marginTop:50}}>
            <CssButton
              variant="contained"
              component="label"
              style={{width:300,marginRight:10}}
            >
              Upload Motivational Cover
              <input
                type="file"
                hidden
                onChange={(e)=>e.target.files[0]?setMotivation(e.target.files[0]):""}
              />
            </CssButton>
            {!motivation?"":motivation.name}
            </div>
            
            <div style={{display:"flex",alignItems:"center",marginTop:50}}>
            <CssButton
              variant="contained"
              component="label"
              style={{width:300,marginRight:10}}
            >
              Upload Resume
              <input
                type="file"
                hidden
                onChange={(e)=>e.target.files[0]?setResume(e.target.files[0]):""}
              />
            </CssButton>
            {!resume?"":resume.name}
            </div>
           

            <div style={{display:"flex",flexDirection:"row",alignItems:"center",whiteSpace:"pre-wrap",marginTop:50}}>
            <GreenCheckbox
            checked={datarelease}
            onChange={()=>setDatarelease(!datarelease)}
            />
            <div style={{textAlign:"left"}}>
            I consent to my data being stored, including after a specific job has been filled, and being considered for any other interesting job offers.
            I would like my data to be considered only for this position.
            </div>

            </div>
            <div style={{display:"flex",flexDirection:"row",alignItems:"center",whiteSpace:"pre-wrap",marginTop:50}}>
            <GreenCheckbox
            checked={privacy}
            onChange={()=>setPrivacy(!privacy)}
            />{"I agree to the "}<span onClick={()=>history.push("/privacy")} style={{color:"#1CAE94",textDecoration:"underline",cursor:"pointer"}}>Privacy Policy</span>{" Statement"}
            </div>
           
            </div>
            <div style={{marginTop:50,color:"red"}}>{error}</div>
            <CssButton variant="contained" style={{width:170,height:45,marginTop:20,marginBottom:100}} onClick={handleClick}><div style={{fontSize:12,fontWeight:'bolder'}}>Submit</div></CssButton>
            
        </div>
        </>
    )
}

export default ApplyForm
