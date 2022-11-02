import React, { useState } from 'react';
import KakaoMap from './KakaoMap';
import './Analysis.css'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';

import Select from '@mui/material/Select'; // 업종 선택 사용
import Radio from '@mui/material/Radio'; // 가격 거래유형 사용
import RadioGroup from '@mui/material/RadioGroup'; // 가격 거래유형 사용
import Slider from '@mui/material/Slider'; // 가격 설정 사용

import Button from '@mui/material/Button'; // 검색 버튼 사용

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
	{ value: 25, label: '1000만' },
	{ value: 50, label: '5000만' },
	{ value: 75, label: '1억' },
	{ value: 100, label: '최대' },
];
const sale_marks = [ // 매매가 슬라이더
	{ value: 0, label: '최소' },
	{ value: 25, label: '1억' },
	{ value: 50, label: '5억' },
	{ value: 75, label: '15억' },
	{ value: 100, label: '최대' },
];
const areaSize_marks = [ // 방면적 슬라이더
	{ value: 0, label: '최소' },
	{ value: 50, label: '100m²' },
	{ value: 100, label: '최대' },
];

const Analysis = () => { // 상권분석 창
	const [inputText, setInputText] = useState(""); // 검색창 입력값
	const [place, setPlace] = useState(""); // 검색창에서 입력한 지역 및 역이름

	const [sectorVisible, setSectorVisible] = useState(false); // 업종 선택창
	const [scoreVisible, setScoreVisible] = useState(false); // 평가지수 선택창
	const [priceVisible, setPriceVisible] = useState(false); // 가격 선택창
	const [floorVisible, setFloorVisible] = useState(false); // 가격 선택창

	const [sector, setSector] = useState(''); // 업종 저장 변수
	const [tradeType, setTradeType] = useState('all'); // 가격 거래유형 변수
	const [monthlyPrice, setMonthlyPrice] = useState([0, 100]); // 월 임대료 변수
	const [depositPrice, setDepositPrice] = useState([0, 100]); // 보증금 변수
	const [salePrice, setSalePrice] = useState([0, 100]); // 매매가 변수

	const [floor, setFloor] = useState('all'); // 건물 층수 변수
	const [areaSize, setAreaSize] = useState([0, 100]); // 건물 면적 변수

	const handleDataSubmit = (e) => {
		e.preventDefault();
		// 검색할 장소 및 역이름 확정
		setPlace(inputText);
		// 저장되어 있던 입력값 삭제
		setInputText("");
	};

	const onInputChange = (e) => { // 검색창 입력값 변경시 setInputText에 변경된 값 저장
		setInputText(e.target.value);
	};

	// 선택한 업종 변경되었을 경우 이벤트 발생
	const handleSectorChange = (e) => {
		setSector(e.target.value);
	};

	const handleTradeTypeChange = (e) => {
		setTradeType(e.target.value);
	}

	const handleMonthlyPriceChange = (e, newValue, activeThumb) => {
		if (!Array.isArray(newValue)) {
			return;
		}

		if (activeThumb === 0) {
			setMonthlyPrice([Math.min(newValue[0], monthlyPrice[1] - minDistance), monthlyPrice[1]]);
		} else {
			setMonthlyPrice([monthlyPrice[0], Math.max(newValue[1], monthlyPrice[0] + minDistance)]);
		}
	};

	const handleDepositPriceChange = (e, newValue, activeThumb) => {
		if (!Array.isArray(newValue)) {
			return;
		}

		if (activeThumb === 0) {
			setDepositPrice([Math.min(newValue[0], depositPrice[1] - minDistance), depositPrice[1]]);
		} else {
			setDepositPrice([depositPrice[0], Math.max(newValue[1], depositPrice[0] + minDistance)]);
		}
	};

	const handleSalePriceChange = (e, newValue, activeThumb) => {
		if (!Array.isArray(newValue)) {
			return;
		}

		if (activeThumb === 0) {
			setSalePrice([Math.min(newValue[0], salePrice[1] - minDistance), salePrice[1]]);
		} else {
			setSalePrice([salePrice[0], Math.max(newValue[1], salePrice[0] + minDistance)]);
		}
	};

	const handleFloorChange = (e) => {
		setFloor(e.target.value);
	};

	const handleAreaSizeChange = (e, newValue, activeThumb) => {
		if (!Array.isArray(newValue)) {
			return;
		}

		if (activeThumb === 0) {
			setAreaSize([Math.min(newValue[0], areaSize[1] - minDistance), areaSize[1]]);
		} else {
			setAreaSize([areaSize[0], Math.max(newValue[1], areaSize[0] + minDistance)]);
		}
	};

	return (
		// 상권 분석 div
		<div className="analysis_wrap">
			{/* 지역 검색, 업종 선택 등을 담당하는 div */}
			<div className="menu_wrap">

				{/* 지역 검색을 위한 검색창 */}
				<div className="search_textinput_wrap">
					<input type="text" className="form-control" getariaLabel="Sizing example input" aria-describedby="inputGroup-sizing-sm"
						placeholder='지역 및 역이름'
						onChange={onInputChange}
						value={inputText}>
					</input>
				</div>

				{/* 업종, 가격 등 설정창 */}
				<div className="option_select_wrap">
					<button type="button" className="btn btn-primary d-grid gap-2 d-md-flex justify-content-md-end"
						onClick={() => {
							setSectorVisible(!sectorVisible);
							setScoreVisible(false);
							setPriceVisible(false);
							setFloorVisible(false);
						}}>
						{sectorVisible ? "선택" : "업종"}
					</button>
					<button type="button" className="btn btn-primary d-grid gap-2 d-md-flex justify-content-md-end"
						onClick={() => {
							setSectorVisible(false);
							setScoreVisible(!scoreVisible);
							setPriceVisible(false);
							setFloorVisible(false);
						}}>
						{scoreVisible ? "리스트닫기" : "리스트"}
					</button>
					<button type="button" className="btn btn-primary d-grid gap-2 d-md-flex justify-content-md-end"
						onClick={() => {
							setSectorVisible(false);
							setScoreVisible(false);
							setPriceVisible(!priceVisible);
							setFloorVisible(false);
						}}>
						{priceVisible ? "설정" : "가격"}
					</button>
					<button type="button" className="btn btn-primary d-grid gap-2 d-md-flex justify-content-md-end"
						onClick={() => {
							setSectorVisible(false);
							setScoreVisible(false);
							setPriceVisible(false);
							setFloorVisible(!floorVisible);
						}}>
						{floorVisible ? "설정" : "층수"}
					</button>
				</div>

				{sectorVisible && <div className='sector_select_wrap'>
					<FormControl variant="standard" sx={{ my: 2, width: 250 }}>
						<InputLabel id="demo-simple-select-standard-label">업종</InputLabel>
						<Select
							labelId="demo-simple-select-standard-label"
							id="demo-simple-select-standard"
							value={sector}
							onChange={handleSectorChange}
							label="Sector"
						>
							<MenuItem value="">
								<em>선택안함</em>
							</MenuItem>
							<MenuItem value={10}>한식</MenuItem>
							<MenuItem value={20}>일식</MenuItem>
							<MenuItem value={30}>중식</MenuItem>
							<MenuItem value={40}>치킨</MenuItem>
							<MenuItem value={50}>피자</MenuItem>
							<MenuItem value={60}>패스트푸드</MenuItem>
						</Select>
					</FormControl>
				</div>}

				{scoreVisible && <div className="score_wrap">
				</div>}

				{priceVisible && <div className="price_wrap">
					<FormControl>
						<FormLabel id="demo-controlled-radio-buttons-group">거래유형</FormLabel>
						<RadioGroup
							row
							aria-labelledby="demo-controlled-radio-buttons-group"
							name="transaction-type"
							defaultValue="all"
							value={tradeType}
							onChange={handleTradeTypeChange}
							sx={{ justifyContent: 'center' }}
						>
							<FormControlLabel sx={{ '& .MuiFormControlLabel-label': { fontSize: '15px' } }} value="all" control={<Radio size="small" />} label="전체" />
							<FormControlLabel sx={{ '& .MuiFormControlLabel-label': { fontSize: '15px' } }} value="monthly" control={<Radio size="small" />} label="월세" />
							<FormControlLabel sx={{ '& .MuiFormControlLabel-label': { fontSize: '15px' } }} value="trade" control={<Radio size="small" />} label="매매" />
						</RadioGroup>
					</FormControl>

					<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
						<FormLabel>월 임대료</FormLabel>
						<FormLabel>
							{monthlyPrice[0] === 0 && monthlyPrice[1] === 100 ? "전체" :
								monthlyPrice[0] === 0 && monthlyPrice[1] !== 100 ? `${monthlyPrice[1] * 10}만 이하` :
									monthlyPrice[0] !== 0 && monthlyPrice[1] === 100 ? `${monthlyPrice[0] * 10}만 이상` : `${monthlyPrice[0] * 10}만 ~ ${monthlyPrice[1] * 10}만`}
						</FormLabel>
					</div>
					<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
						<Box sx={{ width: '85%' }}>
							<Slider
								getariaLabel={() => 'Minimum distance'}
								value={monthlyPrice}
								step={5}
								onChange={handleMonthlyPriceChange}
								valueLabelDisplay="off"
								marks={monthly_marks}
								disableSwap
							/>
						</Box>
					</div>

					<FormLabel id="demo-controlled-radio-buttons-group">보증금</FormLabel>
					<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
						<Box sx={{ width: '85%' }}>
							<Slider
								getariaLabel={() => 'Minimum distance'}
								value={depositPrice}
								step={5}
								onChange={handleDepositPriceChange}
								valueLabelDisplay="off"
								marks={deposit_marks}
								disableSwap
							/>
						</Box>
					</div>

					<FormLabel id="demo-controlled-radio-buttons-group">매매가</FormLabel>
					<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
						<Box sx={{ width: '85%' }}>
							<Slider
								getariaLabel={() => 'Minimum distance'}
								value={salePrice}
								step={5}
								onChange={handleSalePriceChange}
								valueLabelDisplay="off"
								marks={sale_marks}
								disableSwap
							/>
						</Box>
					</div>
				</div>}

				{floorVisible && <div className="floor_wrap">
					<FormControl>
						<FormLabel id="demo-controlled-radio-buttons-group">층수</FormLabel>
						<RadioGroup
							row
							aria-labelledby="demo-controlled-radio-buttons-group"
							name="transaction-type"
							defaultValue="all"
							value={floor}
							onChange={handleFloorChange}
							sx={{ justifyContent: 'center' }}
						>
							<FormControlLabel sx={{ '& .MuiFormControlLabel-label': { fontSize: '15px' } }} value="all" control={<Radio size="small" />} label="전체" />
							<FormControlLabel sx={{ '& .MuiFormControlLabel-label': { fontSize: '15px' } }} value="secondfloor" control={<Radio size="small" />} label="2층이상" />
							<FormControlLabel sx={{ '& .MuiFormControlLabel-label': { fontSize: '15px' } }} value="firstfloor" control={<Radio size="small" />} label="1층" />
							<FormControlLabel sx={{ '& .MuiFormControlLabel-label': { fontSize: '15px' } }} value="basement" control={<Radio size="small" />} label="지하" />
						</RadioGroup>
					</FormControl>

					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<FormLabel>방크기</FormLabel>
						<FormLabel>
							{areaSize[0] === 0 && areaSize[1] === 100 ? "전체" :
								areaSize[0] === 0 && areaSize[1] !== 100 ? `${areaSize[1] * 2}m²이하` :
									areaSize[0] !== 0 && areaSize[1] === 100 ? `${areaSize[0] * 2}m²이상` : `${areaSize[0] * 2}m² ~ ${areaSize[1] * 2}m²`}
						</FormLabel>
					</div>
					<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
						<Box sx={{ width: '85%' }}>
							<Slider
								getariaLabel={() => 'Minimum distance'}
								value={areaSize}
								step={0.5}
								onChange={handleAreaSizeChange}
								valueLabelDisplay="off"
								marks={areaSize_marks}
								disableSwap
							/>
						</Box>
					</div>
				</div>}

				<Button
					variant="contained"
					id='search_button'
					onClick={handleDataSubmit}>
					검색
				</Button>
			</div>

			{/* 지도 div */}
			<KakaoMap className='map_wrap'
				searchPlace={place} // 검색 장소
				rentPriceMin={monthlyPrice[0] * 10} // 월임대료 최소값
				rentPriceMax={monthlyPrice[1] * 10} // 월임대료 최대값
				priceMin={depositPrice[0] * 40} // 보증금 최소값
				priceMax={depositPrice[1] * 40} // 보증금 최대값
				areaMin={areaSize[0] * 2} // 방면적 최소값
				areaMax={areaSize[1] * 2} // 방면적 최대값
			/>
		</div >
	);
}

export default Analysis;
