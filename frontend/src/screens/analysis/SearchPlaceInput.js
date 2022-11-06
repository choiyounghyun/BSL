import React, { useEffect, useState } from "react"
import { FaSearchLocation } from "react-icons/fa" // react에서 제공하는 icon 라이브러리
import './SearchPlaceInput.css'

const SearchPlaceInput = ({ isSideBarOpen, getPlaceName }) => {
  let [placeName, setPlaceName] = useState('') // 검색어 입력창에 입력한 값 변수

  useEffect(() => { // 사이드바가 열리고 닫힐 때마다 입력된 값 초기화
    setPlaceName('')
  }, [isSideBarOpen])

  const textChange = (e) => { // 입력한 값이 변경될때마다 작동되는 함수
    setPlaceName(e.target.value) // 입력할 때마다 변화한 값을 적용
  }

  const pressEnter = (e) => { // Enter를 눌렀을 경우 작동하는 함수
    if (e.key === 'Enter') { // Enter를 눌렀을 경우
      if (placeName === '') { // 입력값이 없는 경우
        vibration(e.target) // 값을 입력하라는 경고 애니메이션 작동
      } else { // 입력값이 있는 경우
        getPlaceName(placeName) // 입력한 값을 장소(동) 및 역이름으로 설정
      }
    }
  }

  const vibration = (target) => { // 입력한 값이 없는 경우 경고하는 애니메이션 함수
    target.classList.add('vibration') // 클래스 추가

    setTimeout(function () { // 500ms 후 클래스 제거
      target.classList.remove('vibration')
    }, 500)
  }

  return (
    <div className="input_place_wrap">
      {/* 검색 아이콘 */}
      <FaSearchLocation className="input_icon" size="35" />
      {/* 검색 아이콘과 검색창 사이 경계선 */}
      <div className="input_border" />
      {/* 검색창 */}
      <input className='input_wrap' placeholder="장소 및 역이름 검색해주세요"
        type="text" value={placeName}
        onChange={textChange} onKeyPress={pressEnter}
      />
    </div>
  )
}

export default SearchPlaceInput