import React, { useState } from 'react'

import KakaoMap from './KakaoMap'
import './Analysis.css'

import rightArrow from '../../assets/AnalysisImages/right_arrow.png'
import leftArrow from '../../assets/AnalysisImages/left_arrow.png'

const Analysis = () => { // 상권분석
	const [isSideBarOpen, toggleIsSideBarOpen] = useState(false)

	const toggleSideBar = () => {
		toggleIsSideBarOpen(!isSideBarOpen)
	}

	return (
		// 상권분석
		<div className="analysis_wrap">
			{/* 지도 div */}
			<KakaoMap className='map_wrap' />

			{isSideBarOpen === false && <div className='open_sidebar_button sidebar_button' onClick={toggleSideBar}>
				<img src={rightArrow} />
			</div>}
			{isSideBarOpen === true && <div className='sideBar_wrap'>
				<div className='search_wrap'></div>
				<div className='close_sidebar_button sidebar_button' onClick={toggleSideBar}>
					<img src={leftArrow} />
				</div>
			</div>}
		</div >
	)
}

export default Analysis
