import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import KakaoMap from './KakaoMap'
import SideBar from './SideBar'
import './Analysis.css'

import Logo from '../../assets/AnalysisImages/BSL_Logo.png'

const Analysis = () => { // 상권분석
	// const [searchOption, setSearchOption] = useState({
	// 	placeName: '', // 지역(동) 및 역이름
	// 	monthlyRentMin: 0, monthlyRentMax: 100000000, // 월 임대료 최소(0원), 최대(1조원)
	// 	depositOrSaleMin: 0, depositOrSaleMax: 100000000, // 보증금 및 매매금 최소(0원), 최대(1조원)
	// 	roomSizeMin: 0, roomSizeMax: 1000000, // 방 크기 최소(0㎡), 최대(1000000㎡)
	// })
	const [isLoading, setIsLoading] = useState(false)
	useEffect(() => {
		setTimeout(function () {
			setIsLoading(true)
		}, 4000)
	})

	const mainnavigate = useNavigate()
	const gotoMain = () => {
		mainnavigate("/")
	}


	const [place, setPlace] = useState('') // 지역(동) 및 역이름
	const getPlaceName = (placeName) => { // 지역(동) 및 역이름을 정하는 함수
		setPlace(placeName)
	}

	return (
		// 상권분석
		<>
			{isLoading === false &&
				<div className='loading_wrap flip'>
					<img src={Logo} alt='Logo' />
				</div>
			}
			{isLoading === true &&
				<div className='analysis_wrap fade-in'>
					<div className='go-to-main' onClick={gotoMain}>
						<img src={Logo} alt='Logo' />
					</div>
					{/* 지도 div */}
					<KakaoMap className='map_wrap'
						place={place} />
					{/* 사이드바 div */}
					<SideBar className='sidebar_wrap'
						getPlaceName={getPlaceName} />
				</div>
			}
		</>
	)
}

export default Analysis
