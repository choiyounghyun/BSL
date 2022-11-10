import React from 'react'

const InputText = () => {
  return (
    <container>
      <div>
        <form action="#">
          <h1>회원가입</h1>
          {/* <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div> */}
          <span>아이디와 아이디를 적어주세요</span>
          <input type="text" placeholder="닉네임을 입력해주세요" />
          <input type="id" placeholder="아이디를 입력해주세요" />
          <input type="password" placeholder="비밀번호를 입력해주세요" />
          <input type="password" placeholder="전화번호를 입력해주세요" />
          <button className='test'>전화번호 인증하기</button>
          <button>회원가입하기</button>
        </form>
      </div>
    </container>
  )
}

export default InputText