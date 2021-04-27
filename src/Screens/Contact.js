import React from 'react'
import ContactMain from "../Components/Contact"
import Banner from "../Components/About/Banner"
const Contact = () => {
    React.useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
    },[])
    return (
        <div>
            <Banner text="Contacts"/>
            <ContactMain/>
        </div>
    )
}

export default Contact
