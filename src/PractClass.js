import React from 'react'
import { createContext } from 'react'
import PractClass2 from './PractClass2';
import PractClass3 from './PractClass3';

export const context=createContext();

function PractClass() {
    var abc="rahul"
  return (
    <div>
        <context.Provider value={abc}>
<PractClass2></PractClass2>
<PractClass3/>
        </context.Provider>
    </div>
  )
}
export default PractClass 
