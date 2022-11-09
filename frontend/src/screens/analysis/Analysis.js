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
	const [mapAreaYX, setMapAreaYX] = useState([0, 0, 0, 0])
	const [dongName, setDongName] = useState('')
	const [clusterId, setClusterId] = useState(0)
	const [clusterMaxPage, setClusterMaxPage] = useState(0)
	const [clusterInfoList, setClusterInfoList] = useState('');
	const [emptyStore, setEmptyStore] = useState([])

	useEffect(() => {
		console.log(clusterMaxPage)
		if (clusterId !== 0 && clusterMaxPage !== 0) {
			getEmptyStoreList()
		}
	}, [clusterId, clusterMaxPage])

	async function getEmptyStoreList() {
		// for (let i = 1; i <= clusterMaxPage; i++) {
		// 	const emptyStoreListURL = `https://k7c208.p.ssafy.io/api/v1/estate/articles?markerId=${clusterId}&page=${i}&dongName=${dongName}&rentPriceMin=${optionDataList.monthly[0] * 10}&rentPriceMax=${optionDataList.monthly[1] * 10}&priceMin=${optionDataList.sale[0] * 100}&priceMax=${optionDataList.sale[1] * 100}&areaMin=${optionDataList.room[0] * 4}&areaMax=${optionDataList.room[1] * 4}&leftLon=${mapAreaYX[0]}&rightLon=${mapAreaYX[1]}&topLat=${mapAreaYX[2]}&bottomLat=${mapAreaYX[3]}`
		// 	const response = await axios.get(emptyStoreListURL)

		// 	console.log(response.data.articles)
		// }
		const emptyStoreListURL = `https://k7c208.p.ssafy.io/api/v1/estate/articles?markerId=${clusterId}&page=1&dongName=${dongName}&rentPriceMin=${optionDataList.monthly[0] * 10}&rentPriceMax=${optionDataList.monthly[1] * 10}&priceMin=${optionDataList.sale[0] * 100}&priceMax=${optionDataList.sale[1] * 100}&areaMin=${optionDataList.room[0] * 4}&areaMax=${optionDataList.room[1] * 4}&leftLon=${mapAreaYX[0]}&rightLon=${mapAreaYX[1]}&topLat=${mapAreaYX[2]}&bottomLat=${mapAreaYX[3]}`
		const response = await axios.get(emptyStoreListURL)

		console.log(response.data)
		setEmptyStore(response.data.articles)

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
						setDongName={setDongName}
						setMapAreaYX={setMapAreaYX}
						setClusterId={setClusterId}
						setClusterMaxPage={setClusterMaxPage} />
					{/* 사이드바 div */}
					<SideBar className='sidebar_wrap'
						setOptionDataList={setOptionDataList}
						emptyStore={emptyStore} setEmptyStore={setEmptyStore} />
				</div>
			}
		</>
	)
}

export default Analysis
