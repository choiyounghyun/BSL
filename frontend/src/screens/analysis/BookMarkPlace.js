import React, { useState, useEffect } from "react"
import axios from "axios"
import './BookMarkPlace.css'

import need_login from '../../assets/AnalysisImages/logo-crying.svg'

const BookMarkPlace = ({ userId }) => {
  const [bookmarkData, setBookmarkData] = useState({})

  const getBookMarkData = async (userId) => {
    const getBookMarkURL = `http://k7c208.p.ssafy.io:8080/v1/estate/bookmarks?id=${userId}`
    const response = await axios.get(getBookMarkURL)

    setBookmarkData(response.data)
  }

  useEffect(() => {
    if (userId !== '') {
      getBookMarkData(userId)
      console.log(bookmarkData)
    }
  }, [userId]);

  return (
    <div className="bookmark_wrap">
      {userId === '' && <div className="need_login_page_wrap">
        <img src={need_login} alt="needLoginWarnImg" />
        <div className="warn_message_wrap">로그인이 필요한 서비스입니다.</div>
      </div>}
      {userId !== '' && <div>
        <div> 북마크 창</div>
      </div>}
    </div>
  )
}

export default BookMarkPlace