import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import left from "../../../Assets/left-arrow.png"
import right from "../../../Assets/right-arrow.png"
import slider from "../../../Assets/slider.png"
import slider1 from "../../../Assets/slider1.png"
import "./slider.scss"
import { makeStyles } from '@material-ui/core/styles';
import {withWidth} from "@material-ui/core"


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

let images = [
    {
        src: slider
    },
    {
        src: slider1
    }
];

const Slider = ({width}) => {
    const classes = useStyles();
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = width==='xs'?50:500;
    return (
        <div className="root">
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={1}
                leftChevron={<img src={left} className={classes.arrow} alt="left" />}
                rightChevron={<img src={right} className={classes.arrow} alt="right" />}
                chevronWidth={chevronWidth}
                infiniteLoop={true}
            >
                {images.map((item) => {
                    return (
                        <div className={classes.item} style={{ backgroundImage:`url(${item.src})` }}>
                            <div className={classes.content}>
                                <div style={{width:width==='xs'?200:500,textAlign:"left"}}>
                                <h1 style={{fontSize:width==='xs'?20:40,lineHeight:1.5}}>Digitally Transform Business Using</h1>
                                <h1 style={{fontSize:width==='xs'?20:40,lineHeight:1,color:"#1BAC94"}}>Information <span style={{color:"#A5CB5E"}}>Technology</span></h1>
                                </div>
                            </div>
                        </div>
                    )
                })
                }

            </ItemsCarousel>
        </div>
    );
}

export default withWidth()(Slider);
