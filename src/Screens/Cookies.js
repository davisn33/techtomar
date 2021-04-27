import React from 'react'
import Banner from '../Components/About/Banner'
import CookiePolicy from '../Components/CookiePolicy'


const Cookies = () => {
    React.useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
    },[])
    return (
        <div>
            <Banner text="Cookie Policy"/>
            <CookiePolicy/>
        </div>
    )
}

export default Cookies
