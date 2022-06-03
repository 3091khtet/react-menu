import React from 'react'
import "./advertise.css"
import {Typography} from "@mui/material"

function Advertise() {
  return (
    <div className='advertiseCon'>

    <div className="firstAdvertise d-flex align-items-center">

<div className='firstContent' data-aos="zoom-in-out" >
<h1 className="text-info fs-1">Enjoy on your Example Movie</h1>
<p className='text-light fs-2'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
</div>

<img data-aos="zoom-up"  src="https://www.themoviedb.org/t/p/w220_and_h330_face/3r4LYFuXrg3G8fepysr4xSLWnQL.jpg" alt="" />

    </div>




    <div className="secondAdvertise d-flex align-items-center">

<img data-aos="flip-right"  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />

<div className='secondContent' data-aos="fade-in-down" >
<h1 className="text-danger fs-1">Download your shows to watch offline.</h1>
<p className='text-light fs-2'>Save your favorites easily and always have something to watch.</p>
</div>



    </div>

<div className="thirdAdvertise">
<div className="thirdContent"  data-aos="zoom-down" >
<Typography variant="h3" className="text-warning typo">Watch everywhere.</Typography>

<Typography variant="h4" className="text-success typo" data-aos="fade-up" >
Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
</Typography>
</div>
</div>


<div className="fourthAdvertise d-flex align-items-center">
  <img   data-aos="fade-right"   src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/kidsValueProp.png" alt="" />


<div   data-aos="fade-in-left"  className="fourthContent">
  <h1 className="text-light display-2">Create profiles for kids.</h1>
  <p  className="text-light fs-3">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
</div>

</div>


    </div>
  )
}

export default Advertise