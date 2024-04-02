import React, { useState } from 'react'
import { Link, Route, Router, BrowserRouter, Routes } from 'react-router-dom';
import App from './App';
import Admin from './Admin';
import Users from './Users';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';




function Salthome() {
  
  var [modal, setModal] = useState(false);
  var [modals, setModals] = useState(false);


  var si = () => {

    var input1 = document.getElementsByClassName('inp1').value;
    var input2 = document.getElementsByClassName('inp2').value;

  }

  var touch = ()=>{
    setModal(!modal)
  }

  var touches = ()=>{
    setModals(!modals)
  }

  return (

    <div>
      <div>
        <img src="./images/logo.png" height="90px" width="90px"></img>
        <button type='button'>JEANS</button>
        <button>TOPS</button>
        <button>KURTAS</button>
        <button>PANTS</button>
        <button>SHOES</button>
        <button>SLIPPERS</button>
        <button>DAILYWEAR</button>
        <button>JERSEYS</button>
        {/* <Routes>
       <Route path='/adminpage' element={<Admin></Admin>}> </Route>
        </Routes> */}
     <img class="d-block w-100" src="./images/gold.jpg" alt="First slide" height="30px" />

        <hr></hr>
        {/* <BrowserRouter>
        <div>
<h1>Main</h1>

</div>
 <Link to='/Admin'>ADMIN</Link>
<img src="./images/logo.png" ></img>
<Link to='/App'>USERS</Link>
<div>
  </div>
</BrowserRouter> */}
        <BrowserRouter>
           <button onClick={touch}>  <Link to="/Users">Users</Link> </button> 
              <img  src="./images/logo.png"  id='homelog' ></img>
        
         <button  onClick={touches}>  <Link to="/Admin">ADMIN</Link> </button> 
          
            <Routes>
              <Route path='/Admin' element={<Admin/>}></Route>
              <Route path='/Users' element={<Users/>}></Route>
            </Routes>

        </BrowserRouter>
        {/* <BrowserRouter>
        <Link to='/hello'>hellooo</Link>
        <Routes>
          <Route path='/hello' element={<Admin/>}></Route>
        </Routes>
        </BrowserRouter> */}
        <img class="d-block w-100" src="./images/gold.jpg" alt="First slide" height="300px" />
        
        {/* <Routes> */}



        {/* <Route path="Admin" element={<Admin />} /> */}

      </div>
    </div>


  )
}

export default Salthome
