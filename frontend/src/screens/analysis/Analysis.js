import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import KakaoMap from './KakaoMap'
import SideBar from './SideBar'
import axios from 'axios'
import './Analysis.css'

import Logo from '../../assets/AnalysisImages/BSL_Logo.png'

const Analysis = () => { // 상권분석
	const [optionDataList, setOptionDataList] = useState({
		place: '', sector: '', tradeType: 'all', floor: 'all',
		monthly: [0, 100], deposit: [0, 100], sale: [0, 100], room: [0, 100]
	})
	const [latLngYX, setLatLngYX] = useState([0, 0, 0, 0])
	const [dongName, setDongName] = useState('')
	const [clusterId, setClusterId] = useState(0)
	const [clusterMaxPage, setClusterMaxPage] = useState(1)

	const getClusterDataList = async (markerId) => {
		console.log(clusterMaxPage)
		// if (dongName !== '' && markerId !== 0) {
		// 	for (let i = 1; i <= clusterMaxPage; i++) {
		// 		const clusterDataListURL = `https://k7c208.p.ssafy.io/api/v1/estate/articles?markerId=${markerId}&page=${i}&dongName=${dongName}&rentPriceMin=${optionDataList.monthly[0] * 10}&rentPriceMax=${optionDataList.monthly[1] * 10}&priceMin=${optionDataList.sale[0] * 100}&priceMax=${optionDataList.sale[1] * 100}&areaMin=${optionDataList.room[0] * 4}&areaMax=${optionDataList.room[1] * 4}&leftLon=${latLngYX[0]}&rightLon=${latLngYX[1]}&topLat=${latLngYX[2]}&bottomLat=${latLngYX[3]}`
		// 		const response = await axios.get(clusterDataListURL)
		// 		console.log(response.data.articles)
		// 	}
		// }
	}

	const [isLoading, setIsLoading] = useState(false)
	useEffect(() => {
		setTimeout(function () {
			setIsLoading(true)
		}, 2000)
	})

	const mainnavigate = useNavigate()
	const gotoMain = () => {
		mainnavigate("/")
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
						optionDataList={optionDataList}
						latLngYX={latLngYX} setLatLngYX={setLatLngYX}
						dongName={dongName} setDongName={setDongName}
						clusterId={clusterId} setClusterId={setClusterId}
						getClusterDataList={getClusterDataList}
						clusterMaxPage={clusterMaxPage} setClusterMaxPage={setClusterMaxPage} />
					{/* 사이드바 div */}
					<SideBar className='sidebar_wrap'
						setOptionDataList={setOptionDataList} />
				</div>
			}
		</>
	)
}

export default Analysis
