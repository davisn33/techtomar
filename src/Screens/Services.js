import React from 'react'
import Banner from '../Components/About/Banner'
import Services from '../Components/Home/Services'
import Partners from '../Components/Services/Partners'
import Service1980 from '../Components/Services/Service1980'
import {getServices} from "../Services/api"

const ServicesPage = () => {
    const [top,setTop]=React.useState([]);
    const [bottom,setBottom]=React.useState([]);
    const [img_url,setImg_url]=React.useState([]);
    
    React.useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
          let lang = localStorage.getItem('lang')
          getServices(lang?lang:"en")
              .then((res)=>{
                setImg_url(res.data.image_url)
                setTop(res.data.data.top)
                setBottom(res.data.data.buttom)
              })
              .catch((e)=>{
  
              })
    }

    ,[])
    return (
        <div>
            <Banner text="Services" />
            <Service1980 img_url={img_url} services={top}/>
            <Services img_url={img_url} services={bottom}/>
            <Partners/>
        </div>
    )
}

export default ServicesPage
