import React from 'react'
import Banner from '../Components/About/Banner'
import Privacynotice from '../Components/Privacy/Privacynotice'
import bannerimg from "../Assets/service-banner-bg.png"

const Privacy = () => {
     React.useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
    },[])
    return (
        <div>
            <Banner text="Privacy Notice" img={bannerimg}/>
            <Privacynotice/>
        </div>
    )
}

export default Privacy
