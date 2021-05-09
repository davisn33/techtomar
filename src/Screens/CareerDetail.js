import React from 'react'
import Banner from '../Components/About/Banner'
import CareerMain from "../Components/CareerDetail"
import bannerimg from "../Assets/service-banner-bg.png"

const CareerDetail = ({match}) => {
    React.useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
    },[])
    return (
        <div>
            <Banner text="career" img={bannerimg}/>
            <CareerMain id={match.params.id}/>
        </div>
    )
}

export default CareerDetail
