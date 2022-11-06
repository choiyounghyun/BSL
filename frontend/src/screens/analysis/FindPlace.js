import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import './FindPlace.css'

const FindPlace = () => {
  return (
    <div className="option_wrap">
      <Tabs>
        <TabList>
          <Tab>
            <p>업종</p>
          </Tab>
          <Tab>
            <p>가격</p>
          </Tab>
          <Tab>
            <p>크기 및 층수</p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content">
            <h2>1</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>2</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>3</h2>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default FindPlace