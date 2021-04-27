import React from 'react'
import Banner from "../Components/About/Banner";
import Whoweare from "../Components/About/Whoweare";
import Cards from "../Components/About/Cards";
import Figures from "../Components/About/Figures";
import Whychooseus from "../Components/About/Whychooseus";
import Team from "../Components/About/Team";
import {getAbout} from "../Services/api"

const About = () => {
        const [whoweare,setWhoweare]= React.useState(null)
        const [baseurl,setBaseurl] = React.useState(null);
        const [services,setServices] = React.useState(null);
        const [whychooseus,setWhychooseus] = React.useState(null);
        const [team,setTeam] = React.useState(null);
        React.useEffect(()=>{
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            let lang = localStorage.getItem("lang");
            getAbout(lang?lang:"en")
            .then((res)=>{
                setBaseurl(res.data.image_url);
                setWhoweare(res.data.data.who_we_are);
                setServices(res.data.data.services);
                setWhychooseus(res.data.data.why_choose_us);
                setTeam(res.data.data.team);
            })
            .catch((e)=>{

            })
        },[])
    return (
        <>
            <Banner text="About"/>
            {whoweare&&<Whoweare heading={whoweare.heading} title={whoweare.title} description={whoweare.description} image={baseurl+"/"+whoweare.image}/>}
            {services&&<Cards services={services} baseurl={baseurl}/>}
            <Figures />
            {whychooseus&&<Whychooseus whychooseus={whychooseus} baseurl={baseurl}/>}
            {team&&<Team  team={team} baseurl={baseurl}/>}
        </>
    )
}

export default About;
