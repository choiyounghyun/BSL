import React, { useState } from 'react'
import "./SignUp.css"
import authService from './sign/AuthService'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {
  const [id, setId] = useState("")
  const [nickname, setNickname] = useState("")
  const [password, setPassword] = useState("")
  const [authNumber, setAuthNumber] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const navigate = useNavigate()

  const sendAuthNumber = () => {


    if (phoneNumber !== null) {
      console.log(phoneNumber);
      axios.get(`https://k7c208.p.ssafy.io/api/auth/check/${phoneNumber}`, {
        phoneNumber, authNumber
      })
        .then((res) => {
          setAuthNumber(res.data.authNumber)
          console.log((res));
        })

    } else;
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await authService.signup(id, nickname, password, phoneNumber, authNumber)
        .then((response) => {
          navigate('/login')
          window.location.reload()
        }
        )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div id='login-div'>
      <div>
        <h1>Bravo Silver Life</h1>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            name="nickname"
            placeholder="닉네임을 입력해주세요"
            value={nickname}
            required
            onChange={(e) => setNickname(e.target.value)}
          />
          <input
            type="text"
            name="id"
            placeholder="아이디를 입력해주세요"
            value={id}
            required
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="number"
            name="phoneNumber"
            placeholder="휴대전화번호를 입력해주세요"
            value={phoneNumber}
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="number"
            name="authNumber"
            placeholder="인증번호를 입력해주세요"
            value={authNumber}
            required
            onChange={(e) => setAuthNumber(e.target.value)}
          />
          <button className="test" type="button" onClick={() => sendAuthNumber()}>인증번호받기</button>
          <button type="submit">회원가입</button>
        </form>

      </div>
    </div>
  )
}

export default SignUp
