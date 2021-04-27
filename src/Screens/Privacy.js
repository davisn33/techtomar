import React from 'react'
import Banner from '../Components/About/Banner'
import Privacynotice from '../Components/Privacy/Privacynotice'

const Privacy = () => {
     React.useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
    },[])
    return (
        <div>
            <Banner text="Privacy Notice"/>
            <Privacynotice/>
        </div>
    )
}

export default Privacy
