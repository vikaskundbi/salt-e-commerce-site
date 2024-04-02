import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Props1 from './Props1';
import reportWebVitals from './reportWebVitals';
import Neww from './Neww';
import { BrowserRouter } from 'react-router-dom';
import PathDefine from './PathDefine';
import Salthome from './Salthome';
import Admin from './Admin';
import Users from './Users';
import Pract from './Pract';
import Tabss from './Tabss';
import Newfile from './Newfile';
import VenuProps from './VenuProps';
import PractClass from './PractClass';
import Props2 from './Props2';
import Newest from './Newest';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <PathDefine/> */}
    {/* <Salthome/> */}
    <App />
    {/* <PractClass/> */}
   {/* <Pract/> */}
    {/* <Admin/> */}
    {/* <Tabss/> */}
    {/* <Users/> */}
  {/* <Newfile></Newfile> */}
  {/* <Neww/> */}
  {/* <Newest/> */}
    {/* <Props1/> */}
  
    {/* <VenuProps></VenuProps> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
