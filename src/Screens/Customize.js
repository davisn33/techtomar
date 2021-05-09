import React from 'react'
import Banner from '../Components/About/Banner'
import CustomizeComp from '../Components/CustomizeComp'
import bannerimg from "../Assets/service-banner-bg.png"

const Customize = () => {
    React.useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
    },[])
    return (
        <div>
            <Banner text="Customize" img={bannerimg}/>
            <CustomizeComp/>
        </div>
    )
}

export default Customize
