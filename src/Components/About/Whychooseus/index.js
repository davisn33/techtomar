import React from 'react'
import bg from "../../../Assets/india-banner.png"
import videoimg from "../../../Assets/video.png"
import { Grid,withWidth  } from '@material-ui/core';

const Whychooseus = ({width,whychooseus,baseurl}) => {
    const [video,setVideo] = React.useState(false)
    return (
        <div style={{minHeight:"100vh",backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",
        display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Grid container style={{width:width==='xs'?"100%":"60%",background:"#F4F7FA",minHeight:"80vh",padding:20}}>
                <Grid item md={6} style={{display:"flex",alignItems: "flex-start",flexDirection:"column"}}>
                <div class="head1">{whychooseus.heading}</div>
                <div class="head2">{whychooseus.title}</div>
                {whychooseus.blocks.map((item,i)=>
                <div style={{padding:12,background:"white",width:"90%",display:"flex",
                justifyContent:"flex-start",fontSize:12,fontWeight:"bold",textAlign:"left",marginTop:10,color:"#02254F"}}>
                {item.text}</div>
                )}
                </Grid>

                <Grid item md={6} style={{padding:10}}>
                <div class="head3" >{whychooseus.description}</div>
                {!video?<img src={videoimg} alt={"videoimg"} style={{width: "80%"}} onClick={()=>setVideo(true)}/>
                :<video controls src={"http://techslides.com/demos/sample-videos/small.mp4"} alt ="bg" style={{width: "100%",marginTop: 50}}/>}
                </Grid>
            </Grid>
            {/* baseurl+"/"+whychooseus.video_url */}
        </div>
    )
}

export default withWidth()(Whychooseus)
