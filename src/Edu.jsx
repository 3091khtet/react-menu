import React,{useState} from 'react'
import {FaUserGraduate} from  "react-icons/fa"
import {BiUserCircle} from "react-icons/bi"
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"
import "./components/home.css"
import "./components/about.css"
import "./components/course.css"
import "./components/contact.css"
import "./components/teacher.css"
import "./components/quick.css"

import Aos from "aos"



function Edu() {
Aos.init();
const [top,setTop]=useState(false)

const menuTop=()=>{
    setTop(!top)
} 

const [log,setLog]=useState(false)
const loginTop=()=>{
setLog(!log)
}
  return (
   <>


<nav className="navbar navbar-expand-lg bg-warning" id="navbar">


<div className="container-fluid">

<div className="burgerCon" onClick={menuTop}>
    
{top?<div className="ri-close-line fs-1 text-light"></div>:<div className="ri-menu-line  fs-1 text-light"></div>}
</div>

<a href="#" className="navbar-brand fs-2 navIcon d-flex align-items-center"><FaUserGraduate />LOGO</a>


<ul className={top?" menuTop":"navbar-nav d-flex menuCon"} onClick={top&&menuTop}>
        <li className="nav-item fs-3">
        <a href="#home">home</a>
        </li>
        <li className="nav-item fs-3">
        <a href="#about">about</a>
        </li>
        <li className="nav-item fs-3">
<a href="#course">course</a>
        </li>
        <li className="nav-item fs-3">
        <a href="#teacher">Teacher</a>
        </li>
        <li className="nav-item fs-3">
        <a href="#contact">Contact</a>
        </li>
      </ul>



<BiUserCircle className='navIcon user fs-1 text-light' onClick={loginTop}/>

    
</div>

</nav>

<div className={log?"modelContent modelDown ":"modelContent"} >


<form action='#'>
<div className='loginLabel'>
  <label className='fs-1'>Login</label>
  <div className="ri-close-line close fs-1" onClick={log&&loginTop}></div>
</div>


<input type="text" placeholder="Username....."/>
    <input type="text"  placeholder="Password......"/>

<h6>forget password?  <a href="#">click here</a></h6> 
<h6>Don't have an account  <a href="#">Register Now</a></h6> 

<button>login</button>

  </form>
</div>












<main >

<div className="homeCon" id="home" >



<h1 className='display-2'>Education from Home</h1>
<p className='fs-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci rem nulla possimus? Perspiciatis totam voluptates, voluptas harum eos molestiae dolorum exercitationem, cupiditate voluptatibus recusandae ea repudiandae pariatur, at doloremque praesentium.</p>

<button>get started</button>


</div>


<div className="aboutCon" id="about" data-aos="fade-left">

<img src="https://media.istockphoto.com/photos/empty-classroom-picture-id1340516763?b=1&k=20&m=1340516763&s=170667a&w=0&h=zA05D-poPoIdoa06_vL2VLDOdBpPzMUKxUphHhx22jc=" alt="" />

<div className="aboutContent">
    <h1>Why choose us </h1>
    <p className='fs-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas voluptatem eligendi optio soluta dolorum cupiditate officiis, officia id placeat, molestiae, alias praesentium est animi! Ea distinctio maxime nisi dolores officiis.</p>
    <button>learn more</button>
</div>


</div>



<div className="courseCon" id="course" data-aos="fade-right">

<h1>our latest Course</h1>

<div className="courseContent">


<div className="card">
  <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGVhcm5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500" className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>


<div className="card">
  <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGVhcm5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500" className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>



<div className="card">
  <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxlYXJuaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500" className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>



<div className="card">
  <img src="https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk=" className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>



<div className="card">
  <img src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhcm5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500" className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>


<div className="card">
  <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGVhcm5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500" className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>


</div>





</div>



<div className="teacherCon" id="teacher">
  <div className="teacherContent">
  <h1 className="display-2">
     our expert Teacher Team</h1>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio similique culpa aspernatur sit ab delectus tempore non, modi quo unde libero earum? Veniam libero id quos necessitatibus consequuntur a minima?</p>
     <button>learn More</button>
  </div>
<img data-aos="flip-right" src="https://media.istockphoto.com/photos/group-photo-at-school-picture-id911030028?b=1&k=20&m=911030028&s=170667a&w=0&h=KQvqkzbHIt5FDGsbyibSzufTqXUTj49xFCM7zFzpPnI=" alt="" />
</div>



<div className="contactCon" id="contact">
   <h1 data-aos="zoom-in-up">Contact us</h1>
  <div className="contactContent">
    <div className='contactBox'>
  <input type="text" />
  <input type="text" />
  <input type="text" />
<textarea ></textarea>
<button>send now</button>
  </div>

<img  src="https://media.istockphoto.com/photos/positive-african-american-teen-student-with-backpack-tablet-pc-and-picture-id1339432131?b=1&k=20&m=1339432131&s=170667a&w=0&h=non0vX8oehaY_rPqmFT6zBK5a-QqoTy9U2Igm1MEMZ8=" />
</div>


</div>





<footer className="quickLinkCon">

  <div className="branch">
  <h3>Branch Location</h3>
<h5>India</h5>
<h5>Usa</h5>
<h5>France</h5>
<h5>Russia</h5>
  </div>

<div className="quickLink">
  <h4 className="text-light">Quick Links</h4>
<a href="#home">home</a>
<a href="#about">about</a>
<a href="#course">course</a>
<a href="#teacher">teacher</a>
<a href="#contact">contact</a>
</div>

<div className="contactInfo">
<i className="ri-map-pin-line"></i>
<i className="ri-mail-line"></i>
<i className="ri-phone-line"></i>
</div>




</footer>

<div className="lastLine">
  <h5>Created by <strong>Mr.Dennis Daniel</strong></h5>
<h5>All Rights Reserved</h5>
</div>


</main>





















   </>





  )
}

export default Edu