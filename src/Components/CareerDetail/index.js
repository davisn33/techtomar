import React from 'react'
import {getCareerDetail} from "../../Services/api"

const CareerDetail = ({id}) => {
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
                    <div>Type:<span style={{ color: "#444", fontWeight: "normal" }}> {content.work_status}</span> Exp:<span style={{ color: "#444", fontWeight: "normal" }}> {content.exp}</span> </div>

                    <div>Vacancy:<span style={{ color: "#444", fontWeight: "normal" }}> {content.vacancy}</span> </div>
                </div>
                <div style={{ textAlign: 'left', color: "grey", fontSize: 17, fontWeight: 500, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: content.description }} />

            </div>
        </div>
    )
}

export default CareerDetail
