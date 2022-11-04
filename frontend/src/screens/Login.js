import React, { useEffect } from 'react'
import "./Login.css"
import { useState } from 'react'
import api from "../Api"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Login = ({ setAuthenticate }) => {
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleId = (e) => {
    setId(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  // const loginUser = (event) => {
  //   if (id === "" || password === "") {

  //   }
  const loginUser = async (event) => {
    if (id === "" || password === "") {

      event.preventDefault();
      console.log("login");
      setAuthenticate(true);
      setId(""); // id 저장
      setPassword(""); // password 저장
      navigate("/"); // 로그인 완료 후 메인 페이지로 이동
    }
  }

  // const handleClick = async (event) => {
  //   event.preventDefault();
  //   console.log('2')
  //   setId("");
  //   setPassword("");
  // }

  useEffect(() => {
    axios.get(api)
  })

  return (
    <div id='login-div'>
      <div className='container'>
        <form onSubmit={(event) => loginUser(event)}>
          <h1>로그인</h1>
          <span>아이디와 비밀번호를 입력해주세요</span>
          <input
            type="id"
            name="id"
            value={id}
            placeholder="아이디를 입력해주세요"
            onChange={handleId}
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="비밀번호를 입력해주세요"
            onChange={handlePassword}
            required
          />
          <button type="submit" >로그인</button>
          <button className='kakaologin'>카카오톡 로그인</button>
        </form>
      </div>
    </div>
  )
}

export default Login