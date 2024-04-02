import React from 'react'
import { useRef, useState } from 'react';
import { Link, BrowserRouter,Router,Route, Routes, json } from 'react-router-dom';
import Salthome from './Salthome';
import App from './App';

function Users() {

  var oneone = useRef();
  var onetwo = useRef();

  var lo = () =>{

    var inpone = oneone.current.value;
    var inptwo = onetwo.current.value;

    if ( inpone == "vikas" && inptwo == "vikas" ){
      return(
        <div>
          <BrowserRouter>
          <Link to="/salt">salt</Link>
          <Routes>
          <Route path='/salt' element={<App></App>}> </Route>
          </Routes>
          </BrowserRouter>
        </div>
        
      )
    }

  }

  var nw = () =>{
    
    return(
      <div>
        
      </div>
    )
    
  }
   
    
  return (
    <div>
       <input type='text' placeholder='Username' ref={oneone}/>
       <input type='text' placeholder='Password' ref={onetwo}/>
         <button onClick={lo}>Login</button>
         <button onClick={nw}>Signup</button>
    </div>
  ) 
}

export default Users