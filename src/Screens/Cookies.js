import React from 'react'
import Banner from '../Components/About/Banner'
import CookiePolicy from '../Components/CookiePolicy'
import bannerimg from "../Assets/service-banner-bg.png"


const Cookies = () => {
    React.useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
    },[])
    return (
        <div>
            <Banner text="Cookie Policy" img={bannerimg}/>
            <CookiePolicy/>
        </div>
    )
}

export default Cookies
