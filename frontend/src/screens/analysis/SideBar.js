import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import SearchPlaceInput from "./SearchPlaceInput"
import TabMenu from "./TabMenu"
import './SideBar.css'

import rightArrow from '../../assets/AnalysisImages/right_arrow.png'
import leftArrow from '../../assets/AnalysisImages/left_arrow.png'
import Logo from '../../assets/AnalysisImages/BSL_Logo.png'

const SideBar = ({ optionDataList, setOptionDataList, emptyStore, setEmptyStore, floatingPopulationDong }) => {
  const sideBarWidth = 330 // 사이드바 창 너비
  const [isSideBarOpen, setIsSideBarOpen] = useState(true) // 버튼을 눌러 창이 열렸는지 판단하는 변수
  const [xPosition, setXPosition] = useState(0) // 사이드바의 움직임을 구현하기 위한 사이드바의 x축 위치 변수
  const [place, setPlace] = useState('')
  const [dataList, setDataList] = useState({
    sector: '', tradeType: 'all', floor: 'all',
    monthly: [0, 100], deposit: [0, 100], sale: [0, 100], room: [0, 100]
  })

  useEffect(() => { // 사이드바가 열리고 닫힐 때마다 입력된 값 초기화
    setPlace('')
  }, [isSideBarOpen])

  const toggleSideBar = () => { // 사이드바 열고닫는 버튼을 눌렀을때 작동되는 함수
    setIsSideBarOpen(!isSideBarOpen) // 열고닫힘 상태를 toggle

    if (xPosition > 0) { // 사이드바가 열려있는 경우
      setXPosition(0) // 사이드바 닫기
    }
    else { // // 사이드바가 닫혀있는 경우
      setXPosition(sideBarWidth) // 사이드바 열기
    }
  }

  const submitData = (e) => {
    if (place !== '' && dataList.sector !== '') {
      const list = {
        place: place, sector: dataList.sector, tradeType: dataList.tradeType, floor: dataList.floor,
        monthly: dataList.monthly, deposit: dataList.deposit, sale: dataList.sale, room: dataList.room
      }
      setOptionDataList(list)
    } else;
  }

  const mainnavigate = useNavigate()
  const gotoMain = () => {
    mainnavigate("/")
  }

  return (
    <aside className="sidebar_wrap" style={{ transform: `translatex(${-xPosition}px)` }}>
      <div className="search_wrap">
        <img src={Logo} className="logo_img" onClick={gotoMain} />

        {/* 검색어 입력창 */}
        <SearchPlaceInput isSideBarOpen={isSideBarOpen}
          place={place} setPlace={setPlace} submitData={submitData} />
        {/* 조건 검색 및 북마크 창 탭 */}
        <TabMenu isSideBarOpen={isSideBarOpen}
          dataList={dataList} setDataList={setDataList}
          emptyStore={emptyStore} setEmptyStore={setEmptyStore}
          optionDataList={optionDataList}
          floatingPopulationDong={floatingPopulationDong} />

        <button type="button" className="start_search_button"
          onClick={submitData}>
          검색하기
        </button>
      </div>
      {/* 사이드바 열고닫는 버튼 */}
      <div className='sidebar_button' onClick={toggleSideBar}>
        <img src={isSideBarOpen ? leftArrow : rightArrow} alt='sidebar_button_img' />
      </div>
    </aside>
  )
}

export default SideBar