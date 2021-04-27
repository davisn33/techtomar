import React from 'react'
import Banner from '../Components/About/Banner'
import Food from '../Components/Products/Food'
import Indiagermany from '../Components/Products/Indiagermany'

const Products = () => {
    React.useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
    },[])
    return (
        <div>
            <Banner text="Products" img=""/>
            <Food/>
        </div>
    )
}

export default Products
