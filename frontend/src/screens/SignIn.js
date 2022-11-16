import React, { useState } from 'react'
import "./SignIn.css"
import { Link, useNavigate } from 'react-router-dom'
import authService from "./sign/AuthService"
import axios from 'axios'
import { color } from '@mui/system'

const SignIn = ({ setAuthenticate }) => {

  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const [ACCESS_TOKEN, setACCESS_TOKEN] = useState("")
  const [loginInfo, setLoginInfo] = useState(false)

  const navigate = useNavigate()

  const getuserdata = (refreshtoken) => {
    return axios
      .get("https://k7c208.p.ssafy.io/api/auth/userinfo", {
        headers: {
          RefreshToken: refreshtoken,
        },
      })
      .then((response) => {
        localStorage.setItem("userdata", JSON.stringify(response.data) || "");
      })
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.signin(id, password).then(
        (response) => {
          const refreshtoken = response?.refreshToken
          setLoginInfo("True")
          getuserdata(refreshtoken);
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
      <div>
        <div className="signin-div">
          <form onSubmit={(event) => handleLogin(event)} className="signinform">
            <Link to="/" style={{ textDecoration: 'none', color: "black" }}>
              <h1 className="title-h1" title="메인화면으로 돌아가기">Bravo Silver Life</h1>
            </Link>
            <span>아이디와 비밀번호를 입력해주세요</span>
            <input
              type="text"
              id="id"
              autoComplete="off"
              value={id}
              placeholder="아이디"
              onChange={(e) => {
                setId(e.target.value);
              }}
              required
            />
            <input
              type="password"
              id="password"
              value={password}
              placeholder="비밀번호"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <div className="signinbuttondiv">
              <p className="p">
                회원가입을 하겠습니까?<br />
                <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>회원가입 하러가기</Link>
              </p>
            </div>
            <button type="submit" className="signinButton">로그인</button>
          </form>
          <button className="kakaosignin">
            <a href="http://k7c208.p.ssafy.io:8080/oauth2/authorization/kakao" style={{ textDecoration: 'none', color: "black" }}>카카오톡 로그인하기</a>
          </button>
        </div>
      </div>
    </section>
  )
}


export default SignIn

