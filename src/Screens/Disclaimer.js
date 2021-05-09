import React from 'react'
import Banner from '../Components/About/Banner'
import DisclaimerComp from '../Components/DisclaimerComp'
import bannerimg from "../Assets/service-banner-bg.png"

const Disclaimer = () => {
    React.useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
    },[])
    return (
        <div>
            <Banner text="Disclaimer" img={bannerimg}/>
            <DisclaimerComp/>
        </div>
    )
}

export default Disclaimer
