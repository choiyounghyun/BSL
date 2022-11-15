import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import FindPlace from './FindPlace'
import BookMarkPlace from './BookMarkPlace'
import './TabMenu.css'

const TabMenu = ({ userId, optionDataList, dataList, setDataList, emptyStore, setEmptyStore, floatingPopulationDong }) => {
  return (
    <Tabs
      defaultActiveKey="search_page"
      id="fill-tab-example"
      className="tabs_wrap"
      fill
    >
      <Tab eventKey="search_page" title="매물 검색">
        <FindPlace dataList={dataList} setDataList={setDataList}
          emptyStore={emptyStore} setEmptyStore={setEmptyStore}
          optionDataList={optionDataList}
          floatingPopulationDong={floatingPopulationDong}
          userId={userId} />
      </Tab>
      <Tab eventKey="bookmark_page" title="북마크">
        <BookMarkPlace userId={userId} />
      </Tab>
    </Tabs>
  )
}

export default TabMenu