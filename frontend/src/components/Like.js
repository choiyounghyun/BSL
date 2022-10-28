import React from "react";
import "./Like.css";

function Like(props) {
  const likelist = [0, 1, 2, 3];
  return (
    <div id="like">
      <div className="">
        <p>내가 좋아요한 게시글</p>
        <div className="">
          {likelist.map(like => (
            <div>좋아요</div>
          ))}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Like;
