import { Grid } from '@material-ui/core'
import React from 'react'
import food from "../../../Assets/industrybg.png"
import {getProducts} from "../../../Services/api"

const Food = () => {
    const [base,setBase]=React.useState("");
    const [array,setArray]=React.useState([]);

    React.useEffect(() => {
        let lang=localStorage.getItem("lang")
        getProducts(lang?lang:"en")
        .then((res)=>{
            setBase(res.data.image_url);
            setArray(res.data.data);
            console.log(res.data);
        })
        .catch((e)=>{

        })
    }, [])
    return (
        <div style={{background: '#F5F9FD'}}>
            {array.map((item,i)=>
            <Grid container style={{display: 'flex',flexDirection:i%2?"row":"row-reverse"}}>
                <Grid item xs={12} md={6}>
                    <img src={base+"/"+item.image} alt="food" style={{width:"100%",height:500,objectFit:"cover"}}/>
                </Grid>
                <Grid item xs={12} md={6} style={{display: 'flex',justifyContent: 'center'}}>
                    <div style={{display: 'flex',alignItems: 'flex-start',flexDirection: 'column',marginTop:50,padding:20}}>
                        <h1 style={{color:"#1CAF95",textAlign:"left"}}>
                            {item.name}
                        </h1>
                        <div style={{display:"flex",textAlign:"left",color:"#5F5E5F",fontSize:17,maxWidth:"90%",alignItems:"center"}}>
                            {item.description}
                        </div>
                        <div style={{background:"linear-gradient(90deg, rgba(28,174,149,1), rgba(171,209,95,1))",
                            padding:"15px 30px",color:"white",fontSize:20,fontWeight:800,marginTop:30}}>
                                VIEW CASE
                        </div>
                    </div>
                </Grid>
            </Grid>
            )}
        </div>
    )
}

export default Food
