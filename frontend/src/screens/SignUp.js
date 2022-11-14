import React, { useState } from 'react'
import "./SignUp.css"
import authService from './sign/AuthService'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {
  const [id, setId] = useState("")
  const [nickname, setNickname] = useState("")
  const [password, setPassword] = useState("")
  const [authNumber, setAuthNumber] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const navigate = useNavigate()

  const sendAuthNumber = () => {


    if (phoneNumber !== "") {
      console.log(phoneNumber);
      axios.get(`https://k7c208.p.ssafy.io/api/auth/check/${phoneNumber}`, {
        phoneNumber, authNumber
      })
        .then((res) => {
          setAuthNumber(res.data.authNumber)
          console.log((res));
        })

    } else { alert("번호를 입력해주세요!!") };
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await authService.signup(id, nickname, password, phoneNumber, authNumber)
        .then((response) => {
          navigate('/signin')
          window.location.reload()
        }
        )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='signupdiv' >
      <div>
        <form onSubmit={handleSignUp} className="signupform">
          <Link to="/" style={{ textDecoration: 'none', color: "black" }}>
            <h1 className="title-h1" title="메인화면으로 돌아가기">Bravo Silver Life</h1>
          </Link>

          <input
            type="text"
            name="nickname"
            placeholder="닉네임"
            value={nickname}
            required
            onChange={(e) => setNickname(e.target.value)}
          />
          <input
            type="text"
            name="id"
            placeholder="아이디"
            value={id}
            required
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="number"
            name="phoneNumber"
            placeholder="휴대전화번호"
            value={phoneNumber}
            required
            onChange={(e) => setPhoneNumber(e.target.value)}

          />
          <input
            type="number"
            name="authNumber"
            placeholder="인증번호"
            value={authNumber}
            required
            onChange={(e) => setAuthNumber(e.target.value)}
          />
          <button className="getauthnumber" type="button" onClick={() => sendAuthNumber()}>인증번호받기</button>
          <button className="signupbutton" type="submit" >회원가입</button>
          <Link to="/signin" style={{ textDecoration: 'none', color: "black" }}>로그인하러가기</Link>
        </form>

      </div>
    </div >
  )
}

export default SignUp
