import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Salthome from './Salthome';


function Tabss() {
  return (

        <div>
           <Tabs>
                <TabList>
                    <Tab>Hi</Tab>
                    <Tab>Hi</Tab>
                </TabList>

                <TabPanel>
                    <h1>Hi</h1>

                </TabPanel>
                <TabPanel>
                  
                  <Salthome/>

                </TabPanel>
            </Tabs>
        </div>
  )
}

export default Tabss