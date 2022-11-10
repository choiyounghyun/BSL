import React, { useState } from 'react'
import "./SignIn.css"
import { Link, useNavigate } from 'react-router-dom'
import authService from "./sign/AuthService"
import axios from 'axios'

const SignIn = ({ setAuthenticate }) => {

  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const [ACCESS_TOKEN, setACCESS_TOKEN] = useState("")
  const [loginInfo, setLoginInfo] = useState(false)

  const navigate = useNavigate()

  // const kakaologin = () => {
  //   axios.post("http://k7c208.p.ssafy.io:8080/oauth2/authorization/kakao")
  //     .then((response) => {
  //       console.log(response)
  //     })
  // }

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(e)
    try {
      await authService.signin(id, password).then(
        () => {

          // setACCESS_TOKEN(e.target.ACCESS_TOKEN)
          // setLoginInfo("True")
          navigate('/'); // login 완료시 main page로 이동
          // window.location.reload()
        },
        (error) => {
          alert("아이디 혹은 비밀번호를 확인해주세요")
          console.log(error)
        }
      )

    } catch (err) {
      console.log(err)
    }

  }
  // console.log(loginInfo)
  return (

    <section>
      <div id="login-div">
        <form onSubmit={(event) => handleLogin(event)} className="loginform">
          <Link to="/" style={{ textDecoration: 'none', color: "black" }}>
            <h1>Bravo Silver Life</h1>
          </Link>

          <span>아이디와 비밀번호를 입력해주세요</span>
          <input
            type="text"
            id="id"
            autoComplete="off"
            value={id}
            placeholder="아이디를 입력해주세요"
            onChange={(e) => {
              setId(e.target.value);
            }}
            required
          />
          <input
            type="password"
            id="password"
            value={password}
            placeholder="비밀번호를 입력해주세요"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <button type="submit" >로그인</button>

        </form>
        <button >
          <Link to="/signup" style={{ textDecoration: 'none' }}>회원가입</Link>
        </button>

        <p>
          회원가입을 하겠습니까?<br />
          <span className="line">
            {/* <button className='kakao-login' type="" onClick={() => kakaologin()}>카카오톡로그인하기
              
            </button> */}
            <a href="http://k7c208.p.ssafy.io:8080/oauth2/authorization/kakao" style={{ textDecoration: 'none' }}>카카오톡로그인하기</a>
            {/* "http://k7c208.p.ssafy.io:8080/oauth2/authorization/kakao" */}
          </span>
        </p>
      </div>
    </section>
  )
}


export default SignIn

