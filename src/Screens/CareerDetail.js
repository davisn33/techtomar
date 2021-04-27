import React from 'react'
import Banner from '../Components/About/Banner'

const CareerDetail = () => {
    React.useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
    },[])
    return (
        <div>
            <Banner text="career"/>
        </div>
    )
}

export default CareerDetail
