import React,{useState} from "react"

import "./Side.css"
import "./Home.css"
import "./About.css"
import "./Skill.css"
import "./Service.css"
import "./Contact.css"


import {RiMoonClearFill} from "react-icons/ri"
import {FaSun} from "react-icons/fa"




function Side(){

const [side, setSide] = useState(false)

const sideBar=()=>{
setSide(!side)
}


const [dark,setDark]=useState(false)


const darkMode=()=>{
  setDark(!dark)
}


  return(
<>
<main className={dark?"night":"white"} onClick={side&&sideBar}>
<div className={side?"lightDark":"lightWhite"} onClick={side&&sideBar}>




<header className={side?"sideBar move":"sideBar"} onClick={side&&sideBar}>


<div className="headerContent">
<div className="darkContent" onClick={darkMode}>
{dark?<RiMoonClearFill className="moon"/>:<FaSun className="sun"/>}
</div>

<nav>
<li><a href="#home">Home </a>    <i class="ri-home-8-fill"></i></li>
  <li> <a href="#about">About</a> <i class="ri-creative-commons-by-line"></i></li>
  <li>  <a href="#skill">Skill </a>  <i class="ri-customer-service-2-line"></i></li>
  <li> <a href="#service">Service  </a>  <i class="ri-award-fill"></i></li>
  <li>  <a href="#contact">Contact </a> <i class="ri-contacts-fill"></i>  </li>
</nav>

</div>



</header>
<img src="https://scontent.frgn7-2.fna.fbcdn.net/v/t1.6435-9/117603942_1002173266911975_8815234435108777145_n.jpg?stp=c0.78.206.206a_dst-jpg_p206x206&_nc_cat=101&ccb=1-5&_nc_sid=da31f3&_nc_ohc=-pCDCTrWfNEAX9s_LnG&tn=J6NrcZG2LTnox3zA&_nc_ht=scontent.frgn7-2.fna&oh=00_AT82_YHYiO1uGEnUhrZrAua-awcMCAtTT92zjjFARlWs8Q&oe=6296F4AB"/>
<img src="https://scontent.frgn7-3.fna.fbcdn.net/v/t1.6435-9/136513663_1114826588979975_2738913944826466707_n.jpg?stp=c0.23.206.206a_dst-jpg_p206x206&_nc_cat=100&ccb=1-5&_nc_sid=da31f3&_nc_ohc=Yuw5ARQGNf4AX9tjiXG&tn=J6NrcZG2LTnox3zA&_nc_ht=scontent.frgn7-3.fna&oh=00_AT8nOPSu5LyIVsXgSlz0zxFqqt_KCgNfNCnTtgMxsO7FkQ&oe=62949DAD"/>
<img src="https://www.facebook.com/photo.php?fbid=935014373627865&set=pb.100013579320816.-2207520000..&type=3" alt="" />
<img src="https://scontent.frgn7-2.fna.fbcdn.net/v/t1.6435-9/76956979_790645888064715_5283657819667562496_n.jpg?stp=c80.0.206.206a_dst-jpg_p206x206&_nc_cat=103&ccb=1-5&_nc_sid=da31f3&_nc_ohc=_gjf5CYCy3MAX-LVUii&_nc_ht=scontent.frgn7-2.fna&oh=00_AT8btWfNx3lWVPaw2xqJXsW_bWtW9VIwiz0OaiiIiJbLzA&oe=62933BA8"></img>
<img src="https://www.facebook.com/photo.php?fbid=786627045133266&set=pb.100013579320816.-2207520000..&type=3"/>
<i className="ri-menu-line  burger" onClick={sideBar}>

</i>

<div class="main-content">

<section className="homeCon   " id="home">
  <h1>I'm</h1>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, voluptatem impedit inventore ad accusamus omnis deserunt esse recusandae possimus nemo itaque! Dolor, placeat corrupti consequuntur nemo nam magnam modi sunt.</p>
</section>



<section className="aboutCon   " id="about">
  <h1>About me</h1>

</section>



<section className="skillCon "   id="skill">
  <h1>skill</h1>
</section>



</div>







</div>
</main>






</>
  )
}

export default Side
