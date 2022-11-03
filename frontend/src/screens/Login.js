import React from 'react'
import "./Login.css"
import { useState } from 'react'



const Login = () => {
  const [id, setId] = useState("")

  return (
    <div id='login-div'>
      <div className='container'>
        <form>
          <h1>로그인</h1>
          <span>아이디와 비밀번호를 입력해주세요</span>
          <input type="id" name="id" placeholder="아이디를 입력해주세요" />
          <input type="password" name="password" placeholder="비밀번호를 입력해주세요" />
          <button type="">로그인</button>
          <button className='kakaologin'>카카오톡 로그인</button>
        </form>
      </div>
    </div>
  )
}

export default Login