import React, { useState } from 'react'
import "./SignUp.css"
import authService from './sign/AuthService'
import { useNavigate } from 'react-router-dom'
import api from '../Api'
import axios from 'axios'



const SignUp = () => {
  const sendAuthNumber = async (confirmPhoneNumber) => {
    setConfirmPhoneNumber(phoneNumber)
    await axios.get(`https://k7c208.p.ssafy.io/api/auth/check/${confirmPhoneNumber}`)
      .then((res) => {
        console.log((res));
        // console.log(res.data.confirmPhoneNumber);
      })


    if (confirmPhoneNumber !== null) {

    } else;

  }
  const [id, setId] = useState("")
  const [nickname, setNickname] = useState("")
  const [password, setPassword] = useState("")
  const [authNumber, setAuthNumber] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [confirmPhoneNumber, setConfirmPhoneNumber] = useState("")

  const [data, setData] = useState({
    nickname: "",
    id: "",
    password: "",
    phoneNumber: "",
    authNumber: "",
  })


  const navigate = useNavigate()

  // const getauthNumber = async (e) => {
  //   const userData = {
  //     nickname: data.nickname,
  //     id: data.id,
  //     password: data.password,
  //     phoneNumber: data.phoneNumber,
  //     authNumber: data.authNumber,
  //   }
  //   e.preventDefault();
  //   try {
  //     await authService.getAuthNumber(phoneNumber, authNumber)
  //       .then((response) => {
  //         if (response.status === 200) {
  //           const authPhoneNumber = { phoneNumber: userData.phoneNumber };
  //         }
  //         console.log('getauthNumber');
  //         window.location.reload()
  //       }
  //       )
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

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
          <button className="test" type="button" onClick={() => sendAuthNumber(confirmPhoneNumber)}>인증번호받기</button>
          <button type="submit">회원가입</button>
        </form>

      </div>
    </div>
  )
}

export default SignUp
