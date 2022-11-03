import "./signUp.css";


function Login(props) {
  // const signUpButton = document.getElementById('signUp');
  // const signInButton = document.getElementById('signIn');
  // const container = document.getElementById('container');

  // signUpButton.addEventListener('click', () => {
  //   container.classList.add("right-panel-active");
  // });

  // signInButton.addEventListener('click', () => {
  //   container.classList.remove("right-panel-active");
  // });

  return (
    <div id="login-div">
      <h2>                       </h2>
      <div class="container" id="container">
        <div class="form-container sign-up-container">
          <form action="#">
            <h1>회원가입</h1>
            <div class="social-container">
              <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
              <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <span>아이디와 이메일을 적어주세요</span>
            <input type="text" placeholder="이름을 입력해주세요" />
            <input type="email" placeholder="이메일을 입력해주세요" />
            <input type="password" placeholder="비밀번호를 입력해주세요" />
            <button>회원가입하기</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form action="#">
            <h1>로그인</h1>
            <div class="social-container">
              <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
              <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <span>이메일과 비밀번호를 입력해주세요</span>
            <input type="email" placeholder="이메일을 입력해주세요" />
            <input type="password" placeholder="비밀번호를 입력해주세요" />
            <a href="#">비밀번호 찾기</a>
            <button>로그인</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>복귀를 환영합니다!</h1>
              <p>혹시 아이디가 있으신가요? 로그인으로 돌아가볼게요!</p>
              <button class="ghost" id="signIn">로그인</button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>반갑습니다!</h1>
              <p>우리 서비스를 이용하고 싶으시다면 회원가입을 해주세요!</p>
              <button class="ghost" id="signUp">회원가입</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Login;

