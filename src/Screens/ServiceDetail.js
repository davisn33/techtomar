import React from 'react'
import Service from '../Components/ServiceDetails'
import {getServiceDetail} from "../Services/api"

const ServiceDetail = ({match}) => {
    const [service,setService] = React.useState([]);
    const [img_url,setImg_url] = React.useState("");
    React.useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
          let lang=localStorage.getItem('lang')
          getServiceDetail(lang?lang:"en",match.params.id)
          .then((res)=>{
              console.log(res.data)
                setImg_url(res.data.image_url);
                setService(res.data.data[0]);
          })
    },[])
    return (
        <div>
            <Service img_url={img_url} service={service}/>
        </div>
    )
}

export default ServiceDetail
