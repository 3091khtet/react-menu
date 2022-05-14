import React,{useState} from 'react'
import "./sideBar.css"
import "./home.css"
import "./about.css"
import "./skill.css"
import "./contact.css"
import "bootstrap/dist/css/bootstrap.css"


import {FcCustomerSupport} from "react-icons/fc"


import {RiMoonClearFill} from "react-icons/ri"
import {FaSun} from "react-icons/fa"

import Type from "typewriter-effect"



import {SiJavascript} from "react-icons/si"

import {FaBootstrap} from "react-icons/fa"

import {FaGitAlt } from "react-icons/fa"

import {SiMaterialui} from "react-icons/si"


import {FaNodeJs} from "react-icons/fa"
import {SiMongodb} from "react-icons/si"
import {SiMysql} from "react-icons/si"

import AOS from "aos"

import {GrSend} from "react-icons/gr"

import {BsFillArrowUpLeftCircleFill} from "react-icons/bs"

function Sidebar() {

const scrollTop=()=>{
  window.scrollTo(0,1)
}



const [dark,setDark]=useState(false)

const darkMode=()=>{
  setDark(!dark)
}

const [side,setSide]=useState(false)
const moveSideBar=()=>{
setSide(!side)
}

  return (
<>

<div className={dark?"night":"white"}>


<aside className={side?"sideBar move":"sideBar"} onClick={side&&moveSideBar}>


    
<div className="darkContent" onClick={darkMode} >
{dark?<RiMoonClearFill className="moon" />:<FaSun className="sun" />}
</div>


<header>

<FcCustomerSupport className='myHead'/>

<nav>
<li   ><a href="#home">Home </a>    <i class="ri-home-8-fill"></i></li>
  <li    > <a href="#about">About</a> <i class="ri-creative-commons-by-line"></i></li>
  <li      >  <a href="#skill">Skill </a>  <i class="ri-customer-service-2-line"></i></li>
 
  <li   >  <a href="#contact">Contact </a> <i class="ri-contacts-fill"></i>  </li>
</nav>




</header>


</aside>

<div className={side?"lightDark":"whiteDark"} onClick={side&&moveSideBar}>
<div className="burger" onClick={moveSideBar} >
    <div className={side?"one oneMove":"one"}></div>
    <div className={side?"two twoMove":"two"}></div>
    <div className={side?"three threeMove":"three"}></div>
</div>



<section className="mainContent">


<div 



className="homeCon" id="home" > 
  
  <div 
  className="homeContent">
    <h1 className='display-5'>Hello! I'm a</h1>
    <h1 className="type display-3">
    <Type 
  options={{
    strings: [" react Developer"," frontEndDeveloper","MernStackDeveloper"],
    autoStart: true,
    loop: true,
  }}
/>
      
      
       </h1>
    <h1  >passionate on IT and CS</h1>
    <p className=" display-6 firstP "  >I have been studying frontEnd Developing since last year(2021) and passionate on the web,android,desktop,window app in
      this field.
    </p>
    
    </div>
    
   
    <img src="https://scontent.frgn7-3.fna.fbcdn.net/v/t1.6435-9/136513663_1114826588979975_2738913944826466707_n.jpg?stp=c0.23.206.206a_dst-jpg_p206x206&_nc_cat=100&ccb=1-5&_nc_sid=da31f3&_nc_ohc=Yuw5ARQGNf4AX9tjiXG&tn=J6NrcZG2LTnox3zA&_nc_ht=scontent.frgn7-3.fna&oh=00_AT8nOPSu5LyIVsXgSlz0zxFqqt_KCgNfNCnTtgMxsO7FkQ&oe=62949DAD" alt=""/>   
    
</div>




<div className="aboutCon " id="about" >

<div className="aboutContent">
<h1 class="display-2  text-danger">about me</h1>
  <p className="display-6">My developing roadMap  is to reach Mern Stack flow and so, as backend Language,I'll use to 
    learn Node (express) ,mySql for  SQl and mongoose for NoSql. 
    I prefer knowledge and experience to  salary in this field.
    And I'll promise to try as much as I can . 
    Now I regularly take concerntation on React(Material UI)
    BootStrap,Vanilla pure JS,and responisve website,and also have a study little taste on Jquery a bit,and then, I have planed to continue for React Native,Next.js, and flutter for coming framework.
    I'll enthusiastically take the responsibility for junior React webDeveloper.
  </p>
  
  <h5 class="name"><strong>name:</strong> Dennis Daniel</h5>
  <h5 class="quality "><strong>Qualification:</strong>Diploma in business English and<br/> Diploma in IT</h5>
  <h5 class="language "><strong>Language:</strong>English and study Japanese</h5>
  
</div>
  
  <div class="aboutImg">
    <img src="https://scontent.frgn7-2.fna.fbcdn.net/v/t1.6435-9/76956979_790645888064715_5283657819667562496_n.jpg?stp=c80.0.206.206a_dst-jpg_p206x206&_nc_cat=103&ccb=1-5&_nc_sid=da31f3&_nc_ohc=_gjf5CYCy3MAX-LVUii&_nc_ht=scontent.frgn7-2.fna&oh=00_AT8btWfNx3lWVPaw2xqJXsW_bWtW9VIwiz0OaiiIiJbLzA&oe=62933BA8"    alt="" />
    </div>

</div>



<div className="skillCon" id="skill"  
   >
    


    <div className="skillBar" >
  
      <li>
        <i className="ri-html5-line htmlIcon skillSubject"></i>
      <div className="bar"><div class="html"></div></div>
      </li>
      
      
      
      <li>
  <i className="ri-css3-line cssIcon skillSubject"></i>
      <div className="bar"><div className="css"></div></div>
      </li>
      
      
      
      <li>
        
       <SiJavascript className="jsIcon"/>
      <div className="bar"><div className="js"></div></div>
      </li>
      
      
      
      <li>
    <FaBootstrap className='bsIcon'/>
      <div className="bar"><div className="bs"></div></div>
      </li>
      
      
      
      
      
      <li>
      <i className="ri-reactjs-line reactIcon skillSubject"></i>
      <div className="bar"><div className="react"></div></div>
      </li>
      
      
      <li>
      < FaGitAlt   className="gitIcon"/>
      <div class="bar"><div class="git"></div></div>
      </li>
      
      
      <li>
    <    SiMaterialui className="muIcon"/>
      <div class="bar"><div class="mu"></div></div>
      </li>
      
      </div>
      
      
      <hr />
     
      <div class="footerImg" >
        <div class="comingSoon" >
          <h1>study for coming soon!</h1>
          <FaNodeJs className="node"/>
        <SiMongodb className="mongoDb"   />
        <SiMysql   className="sql" />
        </div>
          
          
    
          <div id="carouselExampleCaptions" class="carousel slide skillImgCon" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://www.sololearn.com/Certificate/1014-23251833/jpg/" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>html</h5>
                
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://www.sololearn.com/Certificate/1162-23251833/jpg/" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>responsive design</h5>
                
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://www.sololearn.com/Certificate/1097-23251833/jpg/" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>react</h5>
                
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon prev" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon next" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
    
      </div>







  </div>



  <div className="contactCon" id="contact">

<div className="contactHeader">
<h1 class="text-primary">Contact me</h1>
<h2 class="text-secondary">get in touch</h2>
</div>


<div className="contactBody">
 <div className="map text-success">
   <i className="ri-map-pin-line"></i>
   <h5>shwe pyi thar,Yangon</h5>
 </div>

 <div className="phone text-warning">
   <i className="ri-phone-line"></i>
   <h5>+959785293156</h5>
 </div>

 <div className="email text-info">
   <i className="ri-mail-line"></i>
   <h5>khtet3091@gmail.com</h5>
 </div>

</div>

<div className="contactFooter">

<input type="text" placeholder='enter your email.....' />
<input type="text" placeholder='enter your password...........'/>
<input type="text" placeholder='username.......'/>
<textarea placeholder='comment.......'></textarea>

<button>send message   <GrSend className='send'/></button> 

</div>



</div>


</section>

<BsFillArrowUpLeftCircleFill className="arrowTop" onClick={scrollTop}/>


</div>
</div>

</>
  )
}

export default Sidebar