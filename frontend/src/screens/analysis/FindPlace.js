import React, { useEffect, useState } from "react"
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Box from '@mui/material/Box'

import Radio from '@mui/material/Radio' // 가격 거래유형 사용
import RadioGroup from '@mui/material/RadioGroup' // 가격 거래유형 사용
import Slider from '@mui/material/Slider' // 가격 설정 사용

import './FindPlace.css'

const FindPlace = ({ setDataList, emptyStore, setEmptyStore }) => {
  const [isClickButton, setIsClickButton] = useState(0)
  const [sector, setSector] = useState('') // 선택한 업종
  const [tradeType, setTradeType] = useState('all')
  const [monthly, setMonthly] = useState([0, 100])
  const [deposit, setDeposit] = useState([0, 100])
  const [sale, setSale] = useState([0, 100])
  const [floor, setFloor] = useState('all')
  const [roomSize, setRoomSize] = useState([0, 100])

  useEffect(() => {
    if (emptyStore.length !== 0) {
      setIsClickButton(4)
    } else if (emptyStore.length === 0) {
      setIsClickButton(0)
    }
  }, [emptyStore])

  const setCompleteDataList = (getSector) => {
    if (getSector !== null) {
      const setOption = {
        sector: getSector.label, tradeType: tradeType, floor: floor,
        monthly: monthly, deposit: deposit, sale: sale, room: roomSize
      }
      setDataList(setOption)
    } else {
      const setOption = {
        sector: null, tradeType: tradeType, floor: floor,
        monthly: monthly, deposit: deposit, sale: sale, room: roomSize
      }
      setDataList(setOption)
    }
  }

  const handleTradType = (e) => {
    setTradeType(e.target.value)
  }

  const handleMonthly = (e, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (activeThumb === 0) {
      setMonthly([Math.min(newValue[0], monthly[1] - minDistance), monthly[1]])
    } else {
      setMonthly([monthly[0], Math.max(newValue[1], monthly[0] + minDistance)])
    }
  }

  const handleDeposit = (e, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (activeThumb === 0) {
      setDeposit([Math.min(newValue[0], deposit[1] - minDistance), deposit[1]])
    } else {
      setDeposit([deposit[0], Math.max(newValue[1], deposit[0] + minDistance)])
    }
  };

  const handleSale = (e, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setSale([Math.min(newValue[0], sale[1] - minDistance), sale[1]]);
    } else {
      setSale([sale[0], Math.max(newValue[1], sale[0] + minDistance)]);
    }
  };

  const handleFloor = (e) => {
    setFloor(e.target.value);
  };

  const handleRoomSize = (e, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setRoomSize([Math.min(newValue[0], roomSize[1] - minDistance), roomSize[1]]);
    } else {
      setRoomSize([roomSize[0], Math.max(newValue[1], roomSize[0] + minDistance)]);
    }
  }

  return (
    <div className="option_wrap">
      <div className="button_group_wrap">
        <button type="button" className={`${isClickButton === 1 ? 'button-active' : 'button'}`}
          onClick={() => (isClickButton !== 1 ? setIsClickButton(1) : setIsClickButton(0))}>
          업종
        </button>
        <button type="button" className={`${isClickButton === 2 ? 'button-active' : 'button'}`}
          onClick={() => (isClickButton !== 2 ? setIsClickButton(2) : setIsClickButton(0))}>
          가격
        </button>
        <button type="button" className={`${isClickButton === 3 ? 'button-active' : 'button'}`}
          onClick={() => (isClickButton !== 3 ? setIsClickButton(3) : setIsClickButton(0))}>
          크기 및 층수
        </button>
        <button type="button" className={`${isClickButton === 4 ? 'button-active' : 'button'}`}
          onClick={() => (isClickButton !== 4 ? setIsClickButton(4) : setIsClickButton(0))}>
          검색된 매물
        </button>
      </div>

      {isClickButton === 1 && <div className="sector_options_wrap">
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
      </div>}
      {isClickButton === 2 && <div className="price_options_wrap">
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">거래유형</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="transaction-type"
            defaultValue="all"
            value={tradeType}
            onChange={handleTradType}
            sx={{ justifyContent: 'space-evenly' }}
          >
            <FormControlLabel sx={{ '& .MuiFormControlLabel-label': { fontSize: '16px' } }} value="all" control={<Radio sx={{ padding: '5px' }} size="small" />} label="전체" />
            <FormControlLabel sx={{ '& .MuiFormControlLabel-label': { fontSize: '16px' } }} value="rent" control={<Radio sx={{ padding: '5px' }} size="small" />} label="월세" />
            <FormControlLabel sx={{ '& .MuiFormControlLabel-label': { fontSize: '16px' } }} value="trade" control={<Radio sx={{ padding: '5px' }} size="small" />} label="매매" />
          </RadioGroup>
        </FormControl>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <FormLabel>월 임대료</FormLabel>
          <FormLabel>
            {monthly[0] === 0 && monthly[1] === 100 ? "전체" :
              monthly[0] === 0 && monthly[1] !== 100 ? `${monthly[1] * 10}만 이하` :
                monthly[0] !== 0 && monthly[1] === 100 ? `${monthly[0] * 10}만 이상` : `${monthly[0] * 10}만 ~ ${monthly[1] * 10}만`}
          </FormLabel>
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ width: '85%' }}>
            <Slider
              getAriaLabel={() => 'Minimum distance'}
              value={monthly}
              step={1}
              onChange={handleMonthly}
              valueLabelDisplay="off"
              marks={monthly_marks}
              disableSwap
              disabled={tradeType === 'trade' ? true : false}
            />
          </Box>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <FormLabel>보증금</FormLabel>
          <FormLabel>
            {deposit[0] === 0 && deposit[1] === 100 ? "전체" :
              deposit[0] === 0 && deposit[1] !== 100 ? `${deposit[1] * 100}만 이하` :
                deposit[0] !== 0 && deposit[1] === 100 ? `${deposit[0] * 100}만 이상` : `${deposit[0] * 100}만 ~ ${deposit[1] * 100}만`}
          </FormLabel>
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ width: '85%' }}>
            <Slider
              getAriaLabel={() => 'Minimum distance'}
              value={deposit}
              step={0.5}
              onChange={handleDeposit}
              valueLabelDisplay="off"
              marks={deposit_marks}
              disableSwap
              disabled={tradeType === 'trade' ? true : false}
            />
          </Box>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <FormLabel>매매가</FormLabel>
          <FormLabel>
            {sale[0] === 0 && sale[1] === 100 ? "전체" :
              sale[0] === 0 && sale[1] !== 100 ? `${sale[1] * 800}만 이하` :
                sale[0] !== 0 && sale[1] === 100 ? `${sale[0] * 800}만 이상` : `${sale[0] * 800}만 ~ ${sale[1] * 800}만`}
          </FormLabel>
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ width: '85%' }}>
            <Slider
              getAriaLabel={() => 'Minimum distance'}
              value={sale}
              step={1}
              onChange={handleSale}
              valueLabelDisplay="off"
              marks={sale_marks}
              disableSwap
              disabled={tradeType === 'rent' ? true : false}
            />
          </Box>
        </div>

      </div>}
      {isClickButton === 3 && <div className="floor_options_wrap">
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">층수</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="transaction-type"
            defaultValue="all"
            value={floor}
            onChange={handleFloor}
            sx={{ justifyContent: 'space-evenly', marginLeft: '5px' }}
          >
            <FormControlLabel sx={{ '& .MuiFormControlLabel-label': { fontSize: '16px' } }} value="all" control={<Radio sx={{ padding: '5px' }} size="small" />} label="전체" />
            <FormControlLabel sx={{ '& .MuiFormControlLabel-label': { fontSize: '16px' } }} value="secondfloor" control={<Radio sx={{ padding: '5px' }} className="checkbox_wrap" size="small" />} label="2층이상" />
            <FormControlLabel sx={{ '& .MuiFormControlLabel-label': { fontSize: '16px' } }} value="firstfloor" control={<Radio sx={{ padding: '5px' }} className="checkbox_wrap" size="small" />} label="1층" />
            <FormControlLabel sx={{ '& .MuiFormControlLabel-label': { fontSize: '16px' } }} value="basement" control={<Radio sx={{ padding: '5px' }} className="checkbox_wrap" size="small" />} label="지하" />
          </RadioGroup>
        </FormControl>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <FormLabel>방크기</FormLabel>
          <FormLabel>
            {roomSize[0] === 0 && roomSize[1] === 100 ? "전체" :
              roomSize[0] === 0 && roomSize[1] !== 100 ? `${roomSize[1] * 4}m²이하` :
                roomSize[0] !== 0 && roomSize[1] === 100 ? `${roomSize[0] * 4}m²이상` : `${roomSize[0] * 4}m² ~ ${roomSize[1] * 4}m²`}
          </FormLabel>
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ width: '85%' }}>
            <Slider
              getAriaLabel={() => 'Minimum distance'}
              value={roomSize}
              step={0.25}
              onChange={handleRoomSize}
              valueLabelDisplay="off"
              marks={areaSize_marks}
              disableSwap
            />
          </Box>
        </div>
      </div>}

      {isClickButton === 4 && <div className="items_list_wrap">
        {emptyStore.length === 0 && <div>
          <p>검색된 매물이 없습니다.</p>
        </div>}
        {emptyStore.length !== 0 && <div className="items_wrap">
          {
            emptyStore.map((emptyItem) => {
              return (
                <div className='item_wrap' key={emptyItem.articleNo}>
                  <div id='mainTitle'>
                    {emptyItem.articleName} ({emptyItem.floor !== null ? emptyItem.floor : 1}층)
                  </div>
                  <div>
                    월세/보증금 (만원): {emptyItem.rentPrc !== null ? `${emptyItem.rentPrc}/${emptyItem.dealOrWarrantPrc}` : `${emptyItem.dealOrWarrantPrc} (매매)`}
                  </div>
                  <div>
                    해당층/총층: {emptyItem.floor}/{emptyItem.maxFloor}층
                  </div>
                  <div>
                    계약/전용 면적 : {emptyItem.area1}㎡/{emptyItem.area2}㎡
                  </div>
                  {/* <div onClick={() => window.open(`${item.cpPcArticleUrl}`)}>링크이동</div> */}
                </div>
              )
            })
          }

        </div>}
      </div>}
    </div >
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
  { label: '키즈카페' },
  { label: '탕류(보신용)' },
  { label: '통닭(치킨)' },
  { label: '패밀리레스트랑' },
  { label: '패스트푸드' },
  { label: '호프/통닭' },
  { label: '횟집' },
  { label: '기타' }
];

const minDistance = 5; // 가격의 최소, 최대 사이의 최소 거리
const monthly_marks = [ // 월 임대료 슬라이더
  { value: 0, label: '최소' },
  { value: 25, label: '250만' },
  { value: 50, label: '500만' },
  { value: 75, label: '750만' },
  { value: 100, label: '최대' }
];
const deposit_marks = [ // 보증금 슬라이더
  { value: 0, label: '최소' },
  { value: 25, label: '2500만' },
  { value: 50, label: '5000만' },
  { value: 75, label: '7500만' },
  { value: 100, label: '최대' },
];
const sale_marks = [ // 매매가 슬라이더
  { value: 0, label: '최소' },
  { value: 25, label: '2억' },
  { value: 50, label: '4억' },
  { value: 75, label: '6억' },
  { value: 100, label: '최대' },
];
const areaSize_marks = [ // 방면적 슬라이더
  { value: 0, label: '최소' },
  { value: 50, label: '200m²' },
  { value: 100, label: '최대' },
];

export default FindPlace