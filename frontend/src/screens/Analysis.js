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
				<input
					placeholder="Search Place..."
					onChange={onChange}
					value={inputText}
				/>
				<button type="submit">검색</button>
			</form>
			<KakaoMap searchPlace={place} />\
		</>
	);
}

export default Analysis;