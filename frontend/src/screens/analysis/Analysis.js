import React from 'react'

import KakaoMap from './KakaoMap'
import SideBar from './SideBar'
import './Analysis.css'

const Analysis = () => { // 상권분석
	return (
		// 상권분석
		<div className="analysis_wrap">
			{/* 지도 div */}
			<KakaoMap className='map_wrap' />
			{/* 사이드바 div */}
			<SideBar className='sidebar_wrap' />
		</div >
	)
}

export default Analysis
