import React from 'react'
import {getPolicy} from "../../Services/api"

const Privacynotice = () => {
    const [heading,setHeading] = React.useState("");
    const [content,setContent] = React.useState("");
    React.useEffect(()=>{
        getPolicy()
        .then(res=>{
            setHeading(res.data.cookies.eng_title);
            setContent(res.data.cookies.eng_description);
        })
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

export default Privacynotice
