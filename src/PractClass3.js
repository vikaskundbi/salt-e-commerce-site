import React, { useContext } from 'react'
import { context } from './PractClass'

function PractClass3() {
    var abcd=useContext(context)
  return (
    <div>
<h1>hello {abcd}</h1>
    </div>
  )
}

export default PractClass3