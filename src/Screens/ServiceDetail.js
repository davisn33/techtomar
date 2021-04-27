import React from 'react'
import Service from '../Components/ServiceDetails'

const ServiceDetail = () => {
    React.useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
    },[])
    return (
        <div>
            <Service/>
        </div>
    )
}

export default ServiceDetail
