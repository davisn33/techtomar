import React from 'react'
import Industry from '../Components/Home/Industry'
import Product from '../Components/Home/Product'
import Projects from '../Components/Home/Projects'
import Services from '../Components/Home/Services'
import Slider from '../Components/Home/Slider'
import Testimonoals from '../Components/Home/Testimonials'
import {getHome,getServices} from '../Services/api'

const Home = () => {
    const [sliderurl,setSliderurl] = React.useState(null)
    const [reviewurl,setReviewurl] = React.useState(null)
    const [sliders,setSliders] = React.useState([]);
    const [reviews,setReviews] = React.useState([])
    const [bottom,setBottom] = React.useState([])
    const [bottom_url,setBottom_url] = React.useState("")
    React.useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        let lang = localStorage.getItem("lang");
            getHome(lang?lang:"en")
            .then((res)=>{
                console.log(res.data.data.slider)
                setSliderurl(res.data.slider_image_url)
                setReviewurl(res.data.review_image_url)
                setSliders(res.data.data.slider)
                setReviews(res.data.data.rivew)
            })
            .catch((e)=>{

            })
            getServices(lang?lang:"en")
              .then((res)=>{
                  
                setBottom_url(res.data.image_url)
                setBottom(res.data.data.buttom)
              })
              .catch((e)=>{
  
              })

    },[])
    return (
        <div style={{overflowX:"hidden"}}>
            {sliderurl && <Slider sliderurl={sliderurl} sliders={sliders} />}
            <Services img_url={bottom_url} services={bottom}/>
            <Product/>
            <Industry/>
            <Projects/>
            {reviewurl && <Testimonoals reviewurl={reviewurl} reviews={reviews}/>}
            
        </div>
    )
}

export default Home
