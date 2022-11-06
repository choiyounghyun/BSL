import React, { useState } from "react"
import SearchPlaceInput from "./SearchPlaceInput"
import TabMenu from "./TabMenu"
import './SideBar.css'

import rightArrow from '../../assets/AnalysisImages/right_arrow.png'
import leftArrow from '../../assets/AnalysisImages/left_arrow.png'

const SideBar = () => {
  const sideBarWidth = 330
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [xPosition, setXPosition] = useState(sideBarWidth)

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen)

    if (xPosition > 0) {
      setXPosition(0)
    }
    else {
      setXPosition(sideBarWidth)
    }
  }

  return (
    <aside className="sidebar_wrap" style={{ transform: `translatex(${-xPosition}px)` }}>
      <div className="search_wrap">
        <SearchPlaceInput isSideBarOpen={isSideBarOpen} />
        <TabMenu isSideBarOpen={isSideBarOpen} />
      </div>
      <div className='sidebar_button' onClick={toggleSideBar}>
        <img src={isSideBarOpen ? leftArrow : rightArrow} alt='sidebar_button_img' />
      </div>
    </aside>
  )
}

export default SideBar