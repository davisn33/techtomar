import React from 'react'
import Banner from "../Components/About/Banner";
import Whoweare from "../Components/About/Whoweare";
import Cards from "../Components/About/Cards";
import Figures from "../Components/About/Figures";
import Whychooseus from "../Components/About/Whychooseus";
import Team from "../Components/About/Team";

const About = () => {
    return (
        <>
            <Banner text="About"/>
            <Whoweare />
            <Cards />
            <Figures />
            <Whychooseus />
            <Team />
        </>
    )
}

export default About;
