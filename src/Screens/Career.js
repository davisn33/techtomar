import React from 'react'
import Banner from '../Components/About/Banner'
import CareerMain from '../Components/Career'
import {getCareerList} from '../Services/api'

const Career = () => {
    const [careerlist,setCareerlist] = React.useState([])
    React.useEffect(()=>{
        let lang = localStorage.getItem('lang')
        getCareerList(lang?lang:"en")
            .then((res)=>{
                setCareerlist(res.data.data)
            })
            .catch((e)=>{

            })
    },[])
    return (
        <div>
            <Banner text="Career"/>
            <CareerMain careerlist={careerlist}/>
        </div>
    )
}

export default Career
