import React from 'react'

function Newfile() {
    var arr = [1,2,3,4,5,6,7,8,9,9,8,7,10,2,5,'8']

  return (
    <div>
        {arr.filter((ele)=>(ele===8))}
    </div>
  )
}
 
export default Newfile