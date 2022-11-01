import React, { useEffect, useState } from "react";
import "./BookMark.css";

function BookMark(props) {
  const [bmlist, setBmlist] = useState("null");
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
    <div id="book-mark">
      <p>북마크 컴포넌트</p>
      <div className="book-mark-list">
        {bmlist.map(bm => (
          <div>
            <p>북마크 정보 1</p>
            <p>북마크 정보 2</p>
            <p>북마크 정보31</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookMark;
