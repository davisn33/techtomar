import React from 'react'
import {getDisclaimer} from "../../Services/api"

const DisclaimerComp = () => {
    const [heading,setHeading] = React.useState("");
    const [content,setContent] = React.useState("");
    React.useEffect(()=>{
        let lang=localStorage.getItem("lang");
        getDisclaimer(lang)
        .then(res=>{
            setHeading(res.data.data.title);
            setContent(res.data.data.description);
            console.log(res.data)
        })
        .catch((e)=>console.log(e))
    },[])
    return (
        <div style={{display: 'flex',justifyContent: 'center'}}>
            <div style={{width: '70%',display: 'flex',alignItems: 'flex-start',flexDirection: 'column'}}>
                <h1 style={{fontWeight:600,color: '#1CAF95'}}>{heading}</h1>
                <div style={{textAlign: 'left',color:"grey",fontSize:17,fontWeight:500,lineHeight:1.5,whiteSpace:"pre-wrap"}} dangerouslySetInnerHTML={{ __html: content }}>
                </div>
                
            </div>
        </div>
    )
}

export default DisclaimerComp
