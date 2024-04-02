import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './Admin';
import Users from './Users';
import App from './App';
import Salthome from './Salthome';

function PathDefine() {
  return (
<BrowserRouter>
      <Routes>
        {/* <Route path='/adminpage' element={<Admin></Admin>}> </Route> */}
        <Route path='/App' element={<App></App>}></Route>
        {/* <Route path='Users' element={<Users/>}></Route>
        <Route path='salthome.js' element={<Salthome></Salthome>} ></Route>  */}
      </Routes>
      {/* <App/> */}
      </BrowserRouter>
  )
}

export default PathDefine