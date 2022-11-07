import React, { useEffect, useState } from "react"
import SearchPlaceInput from "./SearchPlaceInput"
import TabMenu from "./TabMenu"
import './SideBar.css'

import rightArrow from '../../assets/AnalysisImages/right_arrow.png'
import leftArrow from '../../assets/AnalysisImages/left_arrow.png'

const SideBar = ({ setOptionDataList }) => {
  const sideBarWidth = 330 // 사이드바 창 너비
  const [isSideBarOpen, setIsSideBarOpen] = useState(false) // 버튼을 눌러 창이 열렸는지 판단하는 변수
  const [xPosition, setXPosition] = useState(sideBarWidth) // 사이드바의 움직임을 구현하기 위한 사이드바의 x축 위치 변수
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
    } else if (place === '' && dataList.sector !== '') {
      // vibration()
    }
  }

  const vibration = (target) => { // 입력한 값이 없는 경우 경고하는 애니메이션 함수
    target.classList.add('vibration') // 클래스 추가

    setTimeout(function () { // 500ms 후 클래스 제거
      target.classList.remove('vibration')
    }, 500)
  }

  return (
    <aside className="sidebar_wrap" style={{ transform: `translatex(${-xPosition}px)` }}>
      <div className="search_wrap">
        {/* 검색어 입력창 */}
        <SearchPlaceInput isSideBarOpen={isSideBarOpen}
          place={place} setPlace={setPlace} submitData={submitData} />
        {/* 조건 검색 및 북마크 창 탭 */}
        <TabMenu isSideBarOpen={isSideBarOpen}
          dataList={dataList} setDataList={setDataList} />

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