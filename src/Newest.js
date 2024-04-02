import React, { useEffect, useState } from 'react'

function Newest() {
    var [f,setF] = useState(true)
    var [aa,setAA] = useState(true)
    var b =()=> {
        setF(!f)
    }
    var c = ()=>{
        setAA(!aa)  
    }

    // useEffect(()=>{
    //    console.log(' hey sweet');
    // })

    useEffect(()=>{
        console.log('hey sahiba');
    },[])

    // useEffect(()=>{
    //     console.log("ishrath");
    // },[b])
  return (
    <div>
        <button onClick={b}>B</button>
        <button onClick={c}>C </button>
    </div>
  )
}

export default Newest