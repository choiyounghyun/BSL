import React from 'react'
import "./Join.css"

const Join = () => {
  return (
    <div id='login-div'>
      <div>
        <h1>Bravo Silver Life</h1>
        <div>
          <input type="text" name="nickname" placeholder="닉네임을 입력해주세요" />
          <input type="id" name="id" placeholder="아이디를 입력해주세요" />
          <input type="password" name="password" placeholder="비밀번호를 입력해주세요" />
          <input type="email" name="email" placeholder="이메일을 입력해주세요" />
          <input type="number" name="phonenumber" placeholder="휴대전화번호를 입력해주세요" />
          <button className="test" >인증번호받기</button>
        </div>
        <button type="">회원가입</button>
      </div>
    </div>
  )
}

export default Join