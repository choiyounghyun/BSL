import React, { useState } from 'react';
import KakaoMap from "./kakaomap/KakaoMap";

const Analysis = () => {
	const [inputText, setInputText] = useState("");
	const [place, setPlace] = useState("");

	const onChange = (e) => {
		setInputText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setPlace(inputText);
		setInputText("");
	};

	return (
		<>
			<form className="inputForm" onSubmit={handleSubmit}>
				<select>
					<option value="chicken">치킨(통닭)</option>
					<option value="pizza">피자</option>
				</select>
				<button type="submit">검색</button>
			</form>
			<KakaoMap searchPlace={place} />
		</>
	);
}

export default Analysis;