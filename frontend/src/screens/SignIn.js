import React, { useEffect, useRef, useState, useContext } from 'react'
import "./SignIn.css"
import api from "../Api"
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from "./sign/AuthPrivider"
import axios from 'axios'
import authService from "./sign/AuthService"

const LOGIN_URL = "/auth/sign-in";

const SignIn = ({ setAuthenticate }) => {

  const [id, setId] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.signin(id, password).then(
        () => {
          navigate('/'); // login 완료시 main page로 이동
          window.location.reload()
        },
        (error) => {
          console.log(error)
        }
      )

    } catch (err) {
      console.log(err)
    }

  }

  return (
    <section>
      <div className='container'>
        <form onSubmit={(event) => handleLogin(event)}>
          <h1>로그인</h1>
          <span>아이디와 비밀번호를 입력해주세요</span>
          <input
            type="text"
            id="id"
            // ref={userRef}
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
            // ref={userRef}
            value={password}
            placeholder="비밀번호를 입력해주세요"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <button type="submit" >로그인</button>
          <button className='kakaologin'>카카오톡 로그인</button>
        </form>
        <p>
          회원가입을 하겠습니까?<br />
          <span className="line">
            <Link to="/Join">회원가입하기</Link>
          </span>
        </p>
      </div>
    </section>
  )
}


export default SignIn

