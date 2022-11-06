import React, { useEffect, useState } from "react"
import { FaSearchLocation } from "react-icons/fa"
import './SearchPlaceInput.css'

const SearchPlaceInput = ({ isSideBarOpen }) => {
  let [placeName, setPlaceName] = useState('')

  useEffect(() => {
    setPlaceName('')
  }, [isSideBarOpen])

  const textChange = (e) => {
    setPlaceName(e.target.value)
  }

  const pressEnter = (e) => {
    if (e.key === 'Enter') {
      if (placeName === '') {
        vibration(e.target)
      } else {
        console.log(placeName)
      }
    }
  }

  const vibration = (target) => {
    target.classList.add('vibration')

    setTimeout(function () {
      target.classList.remove('vibration')
    }, 500)
  }

  return (
    <div className="input_place_wrap">
      <FaSearchLocation className="input_icon" size="35" />
      <div className="input_border" />
      <input className='input_wrap' placeholder="장소 및 역이름 검색해주세요"
        type="text" value={placeName}
        onChange={textChange} onKeyPress={pressEnter}
      />
    </div>
  )
}

export default SearchPlaceInput