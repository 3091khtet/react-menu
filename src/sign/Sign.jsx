import React from 'react'
import "./sign.css"
import {Link} from "react-router-dom"
import Aos from "aos"



function Sign() {

Aos.init();

  return (
    <div className="signCon" data-aos="zoom-in-out" >

<img data-aos="flip-down" src="https://assets.nflxext.com/ffe/siteui/vlv3/5ea364b1-8e59-4693-8ad8-f0eaee32d1bf/794a027f-db6b-4f7e-8d62-f0226d9b178d/MM-en-20220530-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />


<div className="signContent">

<form action="#" data-aos="zoom-left" >

<div className="formContent" data-aos="flip-right" >

<h2>Sign In</h2>
<input type="text" placeholder="email..."  data-aos="fade-left"  />
<input type="text" placeholder='password....' data-aos="fade-left"/>
<button className="text-info btn-danger" data-aos="fade-left">Sign In</button>


<div className="signBody">
  <input type="checkbox" data-aos="fade-right"/>
  <a data-aos="fade-up-right" href="https://www.netflix.com/mm/LoginHelp" className="fs-3 text-success">Need Help?</a>
</div>



<strong data-aos="zoom-out-down" className='fs-2 text-info'>New to Netflix?</strong><Link to="/" className='fs-1 text-light'>Sign up now</Link>




</div>





</form>



</div>

    </div>
  )
}

export default Sign