import React from 'react'
import "./home.css"
import {Link} from "react-router-dom"
import {Typography} from "@mui/material"
import Advertise from "../advertise/Advertise"
import Question from "../question/Question"
import Other from "../other/Other"

import Aos from "aos"


function Home() {

Aos.init();

  return (
 <>
 
 
 
<div className="homeCon">

  
<img src="https://assets.nflxext.com/ffe/siteui/vlv3/970e664f-2df4-47ce-b4fa-446082f5abc1/bd147060-9e9a-4f7f-a12c-1238964d591b/MM-en-20220523-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />



<div className="homeContent">


<nav className="navbar navbar-expand-lg ">

<div className="container-fluid">
  
<a href="#home" className="navbar-brand "  >
    <img  data-aos="fade-down" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAAB/CAMAAACJ3OOAAAAAbFBMVEX////YHybUAAD11tXXExzYGSH99fXbSEj0zs/yxMXicHPgbWzXBhPqnJ733d7YJCvdTVHwurvmiIrusrPWAAzZNzj66+veX1/sp6jsq6zxv8DgYmXeVVjjdnj55ufnjpDaQEHnlJPYLjDjfn+LtW7vAAAEZklEQVR4nO2Z6ZKyOhBASUwiOBEVWVQQt/d/x5ukWTM413ZG/X70maopCBAOWTsxCAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCICaJZ4a4PZs5VH9lSG4Scz8Rkms/0eaouqMhw9R4fEc8+cCPqIwbdNiccgecldxjYxIvfiLnu6nkyhaGOzqr8RsPLrVwxzd3nOZwJYdHjyj/uWSMpcvmdGVOmAT/hWYjnP8yZR58b5O9e2Xh/M2RWHv+kbCpX+645l0OhhOc1Xh/MVd/6y8e8w8qdzIHFfdyXWD0G3/GZ5/x37giF+6FW9G9Be2vj3f9ZQv4c3fM+ktD/+7eR/1raL6JNfmyF2Tl3f6Yv7yqe/6T5S+7f8z132fLPzjaB+Xc9ODYVUV6Qem3/kxvp/2nq7Ne2ad4n+D89Wl81yP+YG3fsnAlw3HF3/vf7vhvp56Kp/0TvH/gchLrQLkP0SVOv/OXq/oz/vtm0Ny5FtiOI2j/pqG83x+aor653itKZPPp/WEQfr9/cNP9WKD3SP3en/H8M/6HfuiSAqs/8HcxxAf8oQdDEXoZoPxFoe76K8P/+4vFLARQ/kve+qeo0MfzZ3o24S/XX2VZFEU1mlem/RlbARzlH7f+eoHtvSN/fpqaf6WwyHFUe8+/zQnl3/Rgk3hA67f+LvTQP8QP+oX+ELgxmeH1G/9VacXNuuUj/uoMMfDuaX+5t1mYGOKX/m2kivMP1uCPb/3d+iWy058851f5rf2bDmCUmvjoZ/9VBlxx/uEKam1yqH7M/xDad+lN5pd/ejscoigKo9Gq+s74/0T8aUkgJjdB3NP+GyWkHcCvvv90/Pyn81feLocYNngb+EMhNAPBe+ffSzv+p179ofw3gzDkvf7XLgLwb8X45/1E9l7/fV9wPAywdP6wEn2/vypFP0hjV19D/5B/xB9eK6ER6fx5/0DL1/h7z3r+BawbI/cBGj0FD/yTdMq/GT/HETTCX54PURjXqstg7A87iLoIFr9ZPzr/UE/469tmd0mOX9U5G0wFCH8mmx1dfT1vv/snuum4G1d6+rn1u/PP1/K7P9Ocp6nWNoR+zr/rVRICtPH+mwvdhN10g30I7BQw8A9OesK/55f+bese+e+g+dhle7P7/Av/dgR6xj81MV6K94e1r1Dd3Tx63j8Q8lH/lNu/PpvdeT6fn5ejrJvfL5rWJ6f8YfuZu7Up7N+OA2ukP1Rh55+6nWSdNh1Q9su7fGM4DEI7lVu8wSPfbvf75SW5LcrqvDI5uO87pOZjNGgWsGUOsa2biOUV9fPR2B+qUKTgf2SZKdVqkey2YZx7OxBYVDeAzspqPc/ccigydSNkuzRS0ChxU8DIX1W2vrOy/XHNL9C/Q7mdknCZLKqMt/XqdqAFbhWs5kJo3TbtaDurvzWDl6JU3m36zLg2XQW3hauy6/qYXHCN7lWE+9NxvcL14LhGx0wvJa//jbIkCIIgCIIgCIIgCIIgCIIgCIIgCIIgCOIf5D+IOUpAqcHPIgAAAABJRU5ErkJggg==" alt="" />
</a>

<Link to="/sign"className='fs-2 d-flex align-items-center' >
  <button  data-aos="fade-down"  className="btn-warning text-info">sign in</button>
</Link>
</div>

</nav>




<div className="homeIntro text-light d-flex justify-content-center align-items-center" data-aos="flip-down">
  <Typography variant="h2" className="typo" data-aos="zoom-in-out" >
  Unlimited movies, TV shows, and more.
  </Typography>

<h3 data-aos="fade-right-down"   className='text-info'>Watch anywhere. Cancel anytime.</h3>

<h4>Ready to watch? Enter your email to create or restart your membership.</h4>

<form action="#"  data-aos="fade-left" >
  <input type="text" className='fs-1' placeholder="email ...."/>
<button className='text-light btn-info'>get started</button>
</form>

</div>









</div>




</div>
 

<Advertise />
<Question />
<Other />

 </>
  )
}

export default Home