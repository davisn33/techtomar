import React from 'react'
import Industry from '../Components/Home/Industry'
import Product from '../Components/Home/Product'
import Projects from '../Components/Home/Projects'
import Services from '../Components/Home/Services'
import Slider from '../Components/Home/Slider'
import Testimonoals from '../Components/Home/Testimonials'
import {getHome} from '../Services/api'

const Home = () => {
    const [sliderurl,setSliderurl] = React.useState(null)
    const [reviewurl,setReviewurl] = React.useState(null)
    const [sliders,setSliders] = React.useState([]);
    const [reviews,setReviews] = React.useState([])
    React.useEffect(()=>{
        let lang = localStorage.getItem("lang");
            getHome(lang?lang:"en")
            .then((res)=>{
                setSliderurl(res.data.slider_image_url)
                setReviewurl(res.data.review_image_url)
                setSliders(res.data.data.slider)
                setReviews(res.data.data.rivew)
            })
            .catch((e)=>{

            })

    },[])
    return (
        <div style={{overflowX:"hidden"}}>
            {sliderurl && <Slider sliderurl={sliderurl} sliders={sliders} />}
            <Services/>
            <Product/>
            <Industry/>
            <Projects/>
            {reviewurl && <Testimonoals reviewurl={reviewurl} reviews={reviews}/>}
            
        </div>
    )
}

export default Home
