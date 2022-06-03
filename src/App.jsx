import React from 'react'


import Home from "./netflixHome/Home"
import Sign from "./sign/Sign"

import {BrowserRouter as Router,Switch,Route} from "react-router-dom"




function App() {


  return (
  <>




  <Router>
<Switch>


<Route path="/" exact component={Home}></Route>
<Route path="/sign" component={Sign}></Route>

</Switch>

  </Router>

 
  
  </>
  )
}

export default App