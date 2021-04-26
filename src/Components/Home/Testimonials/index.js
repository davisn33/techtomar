import React,{useState} from 'react'
import "./testimonials.scss";
import man from "../../../Assets/test-man.png";
import leftArrow from "../../../Assets/test-arrow-left.png";
import rightArrow from "../../../Assets/test-arrow-right.png";
import { makeStyles,withWidth } from '@material-ui/core';
import ItemsCarousel from 'react-items-carousel';


const useStyles = makeStyles((theme) => ({
    content: {
        margin:350,
      [theme.breakpoints.down('xs')]: {
        margin:50,
      },
    },
    item:{
        height:"95vh",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: "flex",
        alignItems:'center',
        [theme.breakpoints.down('xs')]: {
            height:"70vh",
        },
    },
    arrow:{
        height: 40
    }
    
  }));

const Testimonoals = ({width,reviewurl,reviews}) => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 500;
    return(
        <div className="root">
        <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        leftChevron={ <img style={{position:"absolute",top:"78%",left:width==='xs'?10:"120%",height:50}} src={leftArrow} alt=''></img>/*<img src={left} className={classes.arrow} alt="left" />*/}
        rightChevron={<img style={{position:"absolute",top:"78%",right:width==='xs'?10:"120%",height:50}} src={rightArrow} alt=''></img>/*<img src={right} className={classes.arrow} alt="right" />*/}
        chevronWidth={chevronWidth}
        infiniteLoop={true}
    >
        {reviews.map((item)=>
        <div className="testimonial-container">
            <h1 >WHAT CLIENTS SAY?</h1>
            <img src={reviewurl+"/"+item.image} style={{maxWidth:200,height:100,objectFit:"contain"}} alt='' ></img>
            <div className="testimonial-quote">
                <h3 style={{width:"60%"}}>"{item.review}"</h3>
            </div>
            <div style={{display: "flex",flexDirection: "column"}} className="testimonial-details">
                <span>{item.name}</span>
                <span>{item.company}</span>
            </div>
            {/* <div className="arrow" style={{textAlign:"center"}}>
                <img src={leftArrow} alt=''></img>
                <img src={rightArrow} alt=''></img>
            </div> */}
        </div>)}
    </ItemsCarousel>
    </div>
    )
}

export default withWidth()(Testimonoals)
