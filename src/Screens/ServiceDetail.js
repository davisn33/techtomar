import React from 'react'
import Service from '../Components/ServiceDetails'
import {getServiceDetail} from "../Services/api"

const ServiceDetail = ({match}) => {
    const [service,setService] = React.useState([]);
    const [development,setDevelopment] = React.useState([]);
    const [details,setDetails] = React.useState([]);
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
                setDevelopment(res.data.development)
                setDetails(res.data.detail)
          })
    },[match.params.id])
    return (
        <div>
            <Service img_url={img_url} service={service} development={development} details={details}/>
        </div>
    )
}

export default ServiceDetail
