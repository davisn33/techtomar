import React from 'react'
import Banner from '../Components/About/Banner'
import Food from '../Components/Products/Food'
import bannerimg from "../Assets/service-banner-bg.png"

const Products = () => {
    React.useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
    },[])
    return (
        <div>
            <Banner text="Products" img={bannerimg}/>
            <Food/>
        </div>
    )
}

export default Products
