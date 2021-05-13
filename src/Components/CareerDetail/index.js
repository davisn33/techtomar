import React from 'react'
import {getCareerDetail} from "../../Services/api"
import { useHistory } from "react-router-dom";
import { Button, withStyles } from '@material-ui/core';


const CssButton = withStyles({
    root: {
        backgroundColor:"#2EB28C",
        color:"white",
        '&:hover': {
            backgroundColor: "#2EB28C",
        },
    },
  })(Button);

const CareerDetail = ({id}) => {
    let history = useHistory();
    const [content,setContent] = React.useState("<div/>");
    React.useEffect(()=>{
        let lang=localStorage.getItem("lang");
        getCareerDetail(lang,id)
        .then(res=>{
            setContent(res.data.data)
        })
        .catch((e)=>console.log(e))
    },[])
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '70%', display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                <h2 style={{ color: "#1CAF95" }}>{content.name}</h2>
                <div style={{ fontWeight: "bold", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <div>Type:<span style={{ color: "#444", fontWeight: "normal" }}> {content.work_status}</span> Exp:<span style={{ color: "#444", fontWeight: "normal" }}> {content.exp}</span> 
                        {" Vacancy Location"}:<span style={{ color: "#444", fontWeight: "normal" }}> {content.vacancy}</span> </div>
                    </div>
                <div style={{ textAlign: 'left', color: "grey", fontSize: 17, fontWeight: 500, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: content.description }} />
                <CssButton variant="contained" style={{width:170,height:45,marginTop:20,marginBottom:50}} onClick={()=>{history.push("/applynow/"+id)}}><div style={{fontSize:12,fontWeight:'bolder'}}>Apply Now</div></CssButton>
            </div>
        </div>
    )
}

export default CareerDetail
