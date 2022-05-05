import React,{useState} from "react"

import "./Side.css"
import "./Home.css"
import "./About.css"
import "./Skill.css"
import "./Service.css"
import "./Contact.css"
import Accordion from "../Accordion"

import {RiMoonClearFill} from "react-icons/ri"
import {FaSun} from "react-icons/fa"
import Type from "typewriter-effect"

import "bootstrap/dist/css/bootstrap.css"


import {FaHtml5} from "react-icons/fa"
import {ImCss3} from "react-icons/im"
import {SiJavascript} from "react-icons/si"
import {SiBootstrap} from "react-icons/si"
import {SiReacttable} from "react-icons/si"
import {DiGit} from "react-icons/di"
import {SiMaterialui} from "react-icons/si"




import {GrNode} from "react-icons/gr"
import {SiMongodb} from "react-icons/si"
import {GrMysql} from "react-icons/gr"




function Side(){

const [side, setSide] = useState(false)

const sideBar=()=>{
setSide(!side)
}


const [dark,setDark]=useState(false)


const darkMode=()=>{
  setDark(!dark)
}

const [click,setClick]=useState(1)
const clickDown=(index)=>{
  setClick(index)
}





  return(
<>

<main className={dark?"night":"white"}>
<div className={side?"lightDark":"lightWhite"} onClick={side&&sideBar}>

<aside className={side?"sideBar move":"sideBar"}>



<div className="headerContent">



<div className="darkContent" onClick={darkMode}>
{dark?<RiMoonClearFill className="moon"/>:<FaSun className="sun"/>}
</div>


<nav>
<li  onClick={()=>clickDown(1)}   ><a href="#home">Home </a>    <i class="ri-home-8-fill"></i></li>
  <li  onClick={()=>clickDown(2)}   > <a href="#about">About</a> <i class="ri-creative-commons-by-line"></i></li>
  <li  onClick={()=>clickDown(3)}     >  <a href="#skill">Skill </a>  <i class="ri-customer-service-2-line"></i></li>
  <li  onClick={()=>clickDown(4)}   > <a href="#service">Service  </a>  <i class="ri-award-fill"></i></li>
  <li  onClick={()=>clickDown(5)}  >  <a href="#contact">Contact </a> <i class="ri-contacts-fill"></i>  </li>
</nav>





</div>


</aside>



<div className="burger" onClick={sideBar}>
  <div className={side?"one oneActive":"one"}></div>
  <div className={side?"two twoActive":"two"}></div>
  <div className={side?"three threeActive":"three"}></div>
</div>






<section className="main-content">

<div className={click===1?"homeDown":"homeCon"}   id="childContent">


<div className="homeContent">
<h1>Hello! I'm</h1>
<h1>
 <Type options={{
autoStart:true,
loop:true,
delay:10,
strings:[
  "front end developer",
  "React developer",
  
]

 }}
/>
</h1>
<h1>passionate on IT and CS</h1>
<p>I have been studying frontEnd Developing since last year(2021) and passionate on the web,android,desktop,window app in
  this field.Now I regularly take concerntation on React(Material UI)
BootStrap,Vanilla pure JS,and responisve website,and also have a study little taste on Jquery a bit,and then, I have planed to continue for React Native,Next.js, and flutter for coming framework.
</p>

</div>


<img src="https://scontent.frgn7-2.fna.fbcdn.net/v/t1.6435-9/73425131_786627051799932_7912868341071478784_n.jpg?stp=c0.53.206.206a_dst-jpg_p206x206&_nc_cat=101&ccb=1-5&_nc_sid=da31f3&_nc_ohc=xnrub4_dXoEAX-KZo84&_nc_ht=scontent.frgn7-2.fna&oh=00_AT9xx-FznBjxGPTyfT4gV9fg9OG26g9wQP6mc15Gbc5WJw&oe=6293D890" alt="" />


</div>


<div className={click===2?"aboutDown":"aboutCon"} id="childContent" >
<h1 className="display-2  text-danger">about me</h1>
<p>My developing roadMap  is to reach Mern Stack flow and so, as backend Language,I'll use to 
  learn Node (express) ,mySql for  SQl and mongoose for NoSql. 
  I prefer knowledge and experience to  salary in this field.
  And I'll promise to try as much as I can . 
  I'll enthusiastically take the responsibility for junior React webDeveloper.
</p>

<h1 className="name"><strong>name:</strong> Dennis Daniel</h1>
<h1 className="quality"><strong>Qualification:</strong>Diploma in business English and<br/> Diploma in IT</h1>
<h1 className="language"><strong>Language:</strong>English and study Japanese</h1>

<div className="aboutImg">
<img src="https://scontent.frgn7-2.fna.fbcdn.net/v/t1.6435-9/76956979_790645888064715_5283657819667562496_n.jpg?stp=c80.0.206.206a_dst-jpg_p206x206&_nc_cat=103&ccb=1-5&_nc_sid=da31f3&_nc_ohc=_gjf5CYCy3MAX-LVUii&_nc_ht=scontent.frgn7-2.fna&oh=00_AT8btWfNx3lWVPaw2xqJXsW_bWtW9VIwiz0OaiiIiJbLzA&oe=62933BA8"    alt="" />

<img src="https://scontent.frgn7-3.fna.fbcdn.net/v/t1.6435-9/136513663_1114826588979975_2738913944826466707_n.jpg?stp=c0.23.206.206a_dst-jpg_p206x206&_nc_cat=100&ccb=1-5&_nc_sid=da31f3&_nc_ohc=Yuw5ARQGNf4AX9tjiXG&tn=J6NrcZG2LTnox3zA&_nc_ht=scontent.frgn7-3.fna&oh=00_AT8nOPSu5LyIVsXgSlz0zxFqqt_KCgNfNCnTtgMxsO7FkQ&oe=62949DAD" alt=""/>
</div>

</div>



<div className={click===3?"skillDown":"skillCon"}  id="childContent">

<div className="skillBar">
  
<li>
 <FaHtml5 className="skillSubject htmlIcon"/>
<div className="bar"><div className="html"></div></div>
</li>



<li>
 <ImCss3 className="skillSubject cssIcon"/>
<div className="bar"><div className="css"></div></div>
</li>



<li>
 <SiJavascript className="skillSubject jsIcon"/>
<div className="bar"><div className="js"></div></div>
</li>



<li>
 <SiBootstrap className="skillSubject bsIcon"/>
<div className="bar"><div className="bs"></div></div>
</li>





<li>
 <SiReacttable className="skillSubject reactIcon"/>
<div className="bar"><div className="react"></div></div>
</li>


<li>
 <DiGit  className="skillSubject gitIcon"/>
<div className="bar"><div className="git"></div></div>
</li>


<li>
 <SiMaterialui  className="skillSubject muIcon"/>
<div className="bar"><div className="mu"></div></div>
</li>

</div>


<hr />
<div className="comingSoon">
<h1>study for coming soon!</h1>

<GrNode className="node"/>
<SiMongodb  className="mongoDb"   />
<GrMysql  className="mySql"  />
</div>


<Accordion/>

</div>







<div className="serviceCon"  id="childContent">
<h2>service</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur architecto atque earum repellat soluta aspernatur, distinctio quos itaque est magni eum minus officiis laborum odit, voluptatibus molestias accusantium assumenda quisquam.</p>


</div>


<div className="contactCon"   id="childContent">

<h3>Contact</h3>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quae sapiente, qui tenetur totam maxime voluptas esse, incidunt voluptates, alias repellendus doloribus! Iure reiciendis sapiente, minus enim doloremque numquam placeat.</p>

</div>



</section>







</div>
</main>








</>
  )
}

export default Side
