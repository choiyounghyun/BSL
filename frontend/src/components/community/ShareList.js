import React, { useEffect, useState } from "react";
import "./ShareList.css";

function ShareList(props) {
  return (
    <div id="sharelist">
      <div>
        <h3>정보공유</h3>
        <hr />
        <div>
          <div>1</div>
          <div>창업지원금 - 경기도시청</div>
          <div>작성자</div>
          <div>날짜</div>
          <div>수정 및 삭제</div>
        </div>
        <hr />
        <div>
          <div>검색바</div>
          <div>글쓰기</div>
        </div>
        <div>페이지</div>
      </div>
    </div>
  );
}

export default ShareList;
