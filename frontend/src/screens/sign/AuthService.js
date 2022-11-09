import axios from 'axios';


const signin = (id, password) => {
  return axios
    .post("https://k7c208.p.ssafy.io/api/auth/sign-in", {
      id, password
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }
      return response.data
    })
}


const signup = (id, nickname, password, phoneNumber, authNumber) => {

  return axios
    .post("https://k7c208.p.ssafy.io/api/auth/sign-up", {
      id, nickname, password, phoneNumber, authNumber
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data))
        console.log(response.data.token)
      }
      return response.data
    })
}

const getAuthNumber = (phoneNumber) => {

  return axios
    .get(`https://k7c208.p.ssafy.io/api/auth/check/${phoneNumber}}`)
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }
      return response.data
    })
}

const logout = () => {
  localStorage.removeItem('user')
}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'))
}


const authService = {
  signin,
  signup,
  logout,
  getCurrentUser,
  getAuthNumber,
}

export default authService