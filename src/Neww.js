import React, { useEffect, useState } from 'react'

function Neww() {
    var a = 0
    var [abc,setAbc] = useState(true);
    var [abc2,setAbc2] = useState(true);
    var b = () =>{
        setAbc(!abc)
    }

    var c = () =>{
        setAbc2(!abc2)
    }
    // alert("hi")
    // useEffect(()=>{alert("hi")});
    // useEffect(()=>{alert("hi")},[]);
    useEffect(()=>{alert("hi")},[abc]);

  return (
    <div>
        <button onClick={b}>name</button>
        <h1>helo</h1>
        <button onClick={c}>Click</button>
    </div>
  )
}
export default Neww 