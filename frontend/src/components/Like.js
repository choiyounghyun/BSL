import React, { useEffect, useState } from "react";
import "./Like.css";

function Like(props) {
  const [likeList, setLikeList] = useState("null");
  // useEffect(() => {
  //   axios({
  //     url: "",
  //     method: "get",
  //     headers: {
  //       authorization: `Bearer ${accessToken}`,
  //     },
  //   })
  //     .then((res) => {
  //       setBmlist(res.data);
  //       setLoading(false);
  //       console.log('sucess')
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <div id="like">
      <div className="">
        <p>내가 좋아요한 게시글</p>
        <div className="">
          {/* {likeList.map(like => ( */}
          <div>
            <p>좋아요1</p>
            <p>좋아요2</p>
            <p>좋아요3</p>
          </div>
          {/* ))} */}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Like;
