import React from 'react'
import bg from "../../Assets/testbg.png"
import main from "../../Assets/header-icon.png"
import phone from "../../Assets/icon1.png"
import menu from "../../Assets/menu.png"
import menu1 from "../../Assets/menu1.png"
import menu2 from "../../Assets/menu2.png"
import menu3 from "../../Assets/menu3.png"
import menu4 from "../../Assets/menu4.png"
import menu5 from "../../Assets/menu5.png"
import menu6 from "../../Assets/menu6.png"
import menu7 from "../../Assets/menu7.png"
import "./servicedetails.scss"
import {Grid, withWidth} from "@material-ui/core"


let list=[
    {
        img:menu,
        title:"Menu Management",
        description:"Offer as accessible ,beautiful and picture-rich Digital Menu with properly described dishes to get customer drooling"
    },
    {
        img:menu1,
        title:"Push Notifications",
        description:"Offer as accessible ,beautiful and picture-rich Digital Menu with properly described dishes to get customer drooling"
    },
    {
        img:menu2,
        title:"Offers and Discounts",
        description:"Offer as accessible ,beautiful and picture-rich Digital Menu with properly described dishes to get customer drooling"
    },
    {
        img:menu3,
        title:"Report and Analytics",
        description:"Offer as accessible ,beautiful and picture-rich Digital Menu with properly described dishes to get customer drooling"
    },
    {
        img:menu4,
        title:"Loyalty Program",
        description:"Offer as accessible ,beautiful and picture-rich Digital Menu with properly described dishes to get customer drooling"
    },
    {
        img:menu5,
        title:"Refer and Earn",
        description:"Offer as accessible ,beautiful and picture-rich Digital Menu with properly described dishes to get customer drooling"
    },
    {
        img:menu6,
        title:"Multi-Branch",
        description:"Offer as accessible ,beautiful and picture-rich Digital Menu with properly described dishes to get customer drooling"
    },
    {
        img:menu7,
        title:"Admin Mobile App",
        description:"Offer as accessible ,beautiful and picture-rich Digital Menu with properly described dishes to get customer drooling"
    },

]

const ServiceDetailMain = ({width,service,img_url,development,details}) => {
    const [selected,setSelected] = React.useState(0)
    return (
        <div className="servicedetails">
            <div className="head" style={{backgroundImage: `url(${bg})`}}>
               <div style={{width:width==='xs'?"100%":"60%",flexDirection:width==='xs'?"column":"row",marginTop:50}}>
                    <div className="heading" style={{width:width==='xs'?"100%":"60%"}}>
                        <h1>
                            {service.title}
                        </h1>
                        <div>
                            {service.description}
                        </div>
                    </div>
                    <div className="bgimage" style={{width:width==='xs'?"100%":"50%",marginBottom:-20}}>
                        <img src={main} alt="servicedetails" style={{width:"100%"}}/>
                    </div>
               </div>
            </div>
            <div className="details">
                <div style={{width:width==='xs'?"100%":"60%"}}>
                    <h1 style={{fontSize:width==='xs'?20:32}}>{service.title}</h1>
                    <img src={img_url+"/"+service.image} alt="sdmain" style={{height:"60vh",objectFit:"cover"}}/>
                    <Grid container>
                    {development.map((item)=>
                    <Grid item xs={12} md={6} >
                        <div style={{padding:10}}>
                            <h2>{item.title}</h2>
                            <div>
                                {item.description}
                            </div>
                        </div>
                    </Grid>
                    )
                    }   
                </Grid>
                
                </div>
                
                
            </div>

            {details.length?<div style={{minHeight:"70vh",background: "linear-gradient(90deg, rgba(28,174,149,1) 30%, rgba(171,209,95,1) 70%)"}}>
                
                    <Grid container style={{padding:20}}>
                        <Grid item xs={12} md={6} style={{display:"flex", justifyContent:"flex-end",alignItems:"center",minHeight:"70vh"}}>
                            <img src={phone} alt="..phone" style={{height:"70vh"}}/>
                        </Grid>
                        
                        <Grid item xs={12} md={6} style={{display:"flex",minHeight:"70vh",alignItems:"flex-start", justifyContent:"center",flexDirection:"column"}}>
                            <div style={{color:"white",width:"50%",textAlign:"left"}}>
                                <div style={{fontSize:35,fontWeight:500}}>{details[selected].title} </div>
                                <div style={{marginTop:20,fontSize:20,fontWeight:400}}>{details[selected].description}</div>
                            </div>
                            <Grid md={12} style={{display:"flex",marginTop:30}}>
                            {details.map((item,i)=>
                                <div onClick={()=>setSelected(i)} style={{background:selected===i?"white":"#bbb",borderRadius:7,width:14,height:14,marginLeft:10,marginTop:50,cursor:"pointer"}}/>
                        
                            )}
                            </Grid>
                        </Grid>
                        
                    </Grid>
            </div>:null}
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:20}}>
            <h1 className="heading123" >Why Apponlease For Your Restaurant App</h1>
                <Grid container style={{width:"85%"}}>
                    {list.map(item=>
                        <Grid item md={3} xs={12} key={item} style={{display:"flex",flexDirection:"column",alignItems:"center",color:"#888",padding:15}}>
                            <img src={item.img} style={{width:120,height:120}}/>
                            <div style={{fontSize:20,fontWeight:500,marginTop:20}}>{item.title}</div>
                            <div style={{fontSize:13,width:250,marginTop:10}}>{item.description}</div>
                        </Grid>
                    )
                    }
                </Grid>
            </div>
        </div>
    )
}

export default withWidth()(ServiceDetailMain)
