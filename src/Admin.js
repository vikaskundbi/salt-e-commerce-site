import React, { useState } from 'react'
import { abc } from './Arraydata';
import { abc2 } from './Arraydata';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



function Admin() {
  var [model, setModel] = useState(true);
  var [brm, setBrm] = useState([]);

  var a = () => {

  }

  var [bb, setBb] = useState(abc);

  var c = () => {

  }

  var d = () => {

  }


  var pp = (index) => {
  var data = abc.map((index) => {
        return (
        abc.index
        )
        
      })
      setBb(data)
  }

  var remove = (inx) => {
    setBrm(
      brm.filter((elle, index) => {
        return index != inx;
      }))
  }

  var k = (e) => {
    console.log("value===", e.target.value);
    setBb(
      abc.filter((ele) => {
        return ele.products.includes(e.target.value)
      })

    )
    console.log("check", abc);
  }

  return (

    <div>
      <hr></hr>
      <Tabs>
        <TabList>
          <Tab> <button onClick={a}>USERS</button></Tab>
          <Tab> <button onClick={pp}>PRODUCTS</button> </Tab>
          <Tab><button onClick={c}>DELETE PRODUCTS</button> </Tab>
          <Tab> <button onClick={d}>ADD PRODUCTS</button> </Tab>
        </TabList>
        <TabPanel>Hi</TabPanel>
        <TabPanel>
        <div>
        {brm.map((element, inx) => {
          return (
            < div className="pi">
              <img className="pc" src={element.image} />
              <p>Brand: {element.brand} </p>
              <p>price: {element.Price}  </p>
              <p>product: {element.products}</p>
              <p>category: {element.category}</p>
              <button onClick={() => { remove(inx) }} >Remove</button>
            </div>
          )
        })}
      </div>
        </TabPanel>
        <TabPanel>
        </TabPanel>

        <TabPanel> 
        </TabPanel>
      </Tabs>
      <input type='text' placeholder='search  catalogue' onChange={k} />


      <hr></hr>
<h3>All Products :</h3>

      {bb.map((element) => {
          return (
            < div className="pi">
              <img class="pc" src={element.image} />
              <p><b>Brand:</b> {element.brand} </p>
              <p><b>price: </b>{element.Price}  </p>
              <p><b>product:</b> {element.products}</p>
              <p><b>category:</b> {element.category}</p>
              <button onClick={() => { remove(element) }} >Remove</button> 
            </div>
          )
        })}

    </div>

  )
}

export default Admin;