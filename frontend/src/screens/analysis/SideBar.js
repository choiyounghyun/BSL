import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import SearchPlaceInput from "./SearchPlaceInput"
import TabMenu from "./TabMenu"
import './SideBar.css'

import rightArrow from '../../assets/AnalysisImages/right_arrow.png'
import leftArrow from '../../assets/AnalysisImages/left_arrow.png'
import Logo from '../../assets/AnalysisImages/BSL_Logo.png'

import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

const SideBar = ({ userId, optionDataList, setOptionDataList, emptyStore, setEmptyStore, floatingPopulationDong }) => {
  const sideBarWidth = 330 // 사이드바 창 너비
  const [isSideBarOpen, setIsSideBarOpen] = useState(true) // 버튼을 눌러 창이 열렸는지 판단하는 변수
  const [xPosition, setXPosition] = useState(0) // 사이드바의 움직임을 구현하기 위한 사이드바의 x축 위치 변수
  const [place, setPlace] = useState('')
  const [dataList, setDataList] = useState({
    sector: '', tradeType: 'all', floor: 'all',
    monthly: [0, 100], deposit: [0, 100], sale: [0, 100], room: [0, 100]
  })
  const [sector, setSector] = useState(null) // 선택한 업종

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
    if (place !== '' && sector !== null) {
      const list = {
        place: place, sector: sector.label, tradeType: dataList.tradeType, floor: dataList.floor,
        monthly: dataList.monthly, deposit: dataList.deposit, sale: dataList.sale, room: dataList.room
      }
      setOptionDataList(list)
    } else;
  }

  const mainnavigate = useNavigate()
  const gotoMain = () => {
    mainnavigate("/")
  }

  const setCompleteDataList = (getSector) => {
    if (getSector !== null) {
      const setOption = getSector.label
      setSector(setOption)
    } else {
      const setOption = null
      setSector(setOption)
    }
  }

  return (
    <aside className="sidebar_wrap" style={{ transform: `translatex(${-xPosition}px)` }}>
      <div className="search_wrap">
        <img src={Logo} className="logo_img" onClick={gotoMain} />

        <div className="search_input_options_wrap">
          {/* 조건 검색 및 북마크 창 탭 */}
          <Autocomplete
            {...sector} value={sector || null}
            onChange={(event, newSector) => {
              // setDataList(dataList.sector)
              setCompleteDataList(newSector)
              setSector(newSector)
            }}
            id="controllable-states-demo"
            options={SectorsList}
            sx={{ width: 280 }}
            renderInput={(params) => <TextField {...params} label="업종 선택" />}
          />
          {/* 검색어 입력창 */}
          <SearchPlaceInput isSideBarOpen={isSideBarOpen}
            place={place} setPlace={setPlace} submitData={submitData} />
        </div>

        <TabMenu isSideBarOpen={isSideBarOpen}
          dataList={dataList} setDataList={setDataList}
          emptyStore={emptyStore} setEmptyStore={setEmptyStore}
          optionDataList={optionDataList}
          floatingPopulationDong={floatingPopulationDong}
          userId={userId} />

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

const SectorsList = [
  { label: '감성주점' },
  { label: '경양식' },
  { label: '김밥(도시락)' },
  { label: '까페' },
  { label: '냉면집' },
  { label: '라이브카페' },
  { label: '복어취급' },
  { label: '분식' },
  { label: '뷔페식' },
  { label: '식육(숯불구이)' },
  { label: '외국음식전문점(인도,태국등)' },
  { label: '이동조리' },
  { label: '일식' },
  { label: '전통찻집' },
  { label: '정종/대포집/소주방' },
  { label: '중국식' },
  { label: '출장조리' },
  { label: '커피숍' },
  { label: '탕류(보신용)' },
  { label: '통닭(치킨)' },
  { label: '패밀리레스트랑' },
  { label: '패스트푸드' },
  { label: '호프/통닭' },
  { label: '횟집' },
  { label: '기타' }
];

export default SideBar