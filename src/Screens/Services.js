import React from 'react'
import Banner from '../Components/About/Banner'
import Services from '../Components/Home/Services'
import Partners from '../Components/Services/Partners'
import Service1980 from '../Components/Services/Service1980'

const ServicesPage = () => {
    React.useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
    },[])
    return (
        <div>
            <Banner text="Services" />
            <Service1980/>
            <Services/>
            <Partners/>
        </div>
    )
}

export default ServicesPage
