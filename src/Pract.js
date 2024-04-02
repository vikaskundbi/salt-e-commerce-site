import React, { useEffect, useState } from 'react'

function Pract() {
    var [modal,setModal]=useState(false);
    var [count,setCount]=useState(0);
// useEffect(()=>{setCount(count+1)})
// useEffect(()=>{setCount(count+1)},[])
useEffect(()=>{setCount(count+1)},[modal])
        
  return (
    <div style={{textAlign:'center'}}>
        <h1>welcome</h1>
        <h2>{count}</h2>
        <button onClick={()=>{setModal(!modal)}}>click</button> 
    
    </div> 
  )
}

export default Pract ;