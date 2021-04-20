import React from 'react'
import {getCookies} from "../../Services/api"

const CookiePolicy = () => {
    const [heading,setHeading] = React.useState("");
    const [content,setContent] = React.useState("");
    React.useEffect(()=>{
        let lang=localStorage.getItem("lang");
        getCookies(lang)
        .then(res=>{
            // setHeading(res.data.data.title);
            // setContent(res.data.data.description);
            console.log(res.data)
        })
        .catch((e)=>console.log(e))
    },[])
    return (
        <div style={{display: 'flex',justifyContent: 'center'}}>
            <div style={{width: '70%',display: 'flex',alignItems: 'flex-start',flexDirection: 'column'}}>
                <h1 style={{fontWeight:600,color: '#1CAF95'}}>{heading}</h1>
                <div style={{textAlign: 'left',color:"grey",fontSize:17,fontWeight:500,lineHeight:1.5}}>
                {content}
                </div>
                
            </div>
        </div>
    )
}

export default CookiePolicy
