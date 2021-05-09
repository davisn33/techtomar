import React from 'react'
import ContactMain from "../Components/Contact"
import Banner from "../Components/About/Banner"
import bannerimg from "../Assets/service-banner-bg.png"

const Contact = () => {
    React.useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
    },[])
    return (
        <div>
            <Banner text="Contacts" img={bannerimg}/>
            <ContactMain/>
        </div>
    )
}

export default Contact
