import React from 'react'
import Banner from '../Components/About/Banner'
import CareerMain from "../Components/CareerDetail"

const CareerDetail = ({match}) => {
    React.useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
    },[])
    return (
        <div>
            <Banner text="career"/>
            <CareerMain id={match.params.id}/>
        </div>
    )
}

export default CareerDetail
