import React from 'react'
import Industry from '../Components/Home/Industry'
import Product from '../Components/Home/Product'
import Projects from '../Components/Home/Projects'
import Services from '../Components/Home/Services'
import Slider from '../Components/Home/Slider'
import Startproject from '../Components/Home/Startproject'
import Testimonoals from '../Components/Home/Testimonials'

const Home = () => {
    return (
        <div>
            <Slider/>
            <Services/>
            <Product/>
            <Industry/>
            <Projects/>
            <Testimonoals/>
            
        </div>
    )
}

export default Home
