// import React from "react";
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Grid from "@mui/material/Grid";
// import Link from "@mui/material/Link";

import "./Login.css";


function Login(props) {
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');

  signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
  });

  signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
  });

  return (
    <>
      <h2>로그인과 회원가입 만드는 중</h2>
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
    </>
  )
}

// function Login(props) {
//   return (
//     <div id="container">
//       <div className="left-frame">
//         <h2 className="project-name">Bravo Silver Life</h2>
//         <Box
//           component="form"
//           sx={{
//             '& > :not(style)': { m: 1, width: '25ch' },
//             flexDirection: 'column',
//           }}
//           noValidate
//           autoComplete="off"
//         >
//           <TextField className="login-textfield" label="아이디를 입력해주세요" variant="outlined" />
//         </Box>
//         <Box
//           component="form"
//           sx={{
//             '& > :not(style)': { m: 1, width: '25ch' },
//             flexDirection: 'column',
//           }}
//           noValidate
//           autoComplete="off"
//         >
//           <TextField id="login-textfield" label="비밀번호를 입력해주세요" variant="outlined" />
//         </Box>
//         <Stack spacing={2} direction="row">
//           <Grid container>
//             <Grid item xs>
//               <Link href="#" variant="body2">
//                 비밀번호 찾기
//               </Link>
//             </Grid>

//             <Grid item>
//               <Link href="#" variant="body2">
//                 {"회원가입하기"}
//               </Link>
//             </Grid>
//           </Grid>
//         </Stack>
//         <Button type="submit"
//           variant="contained"
//           size="large"
//           sx={{ mt: 3, mb: 2 }}
//         >로그인하기</Button>
//       </div>
//       <div className="right-frame">
//         안녕하세요
//       </div>
//     </div>
//   )
// }


export default Login;

// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// import LogoImg from "../assets/images/mainlogo.svg"

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function SignInSide() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Grid container component="main" sx={{ height: '100vh' }}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundImage: 'url(https://source.unsplash.com/random)',
//             backgroundRepeat: 'no-repeat',
//             backgroundColor: (t) =>
//               t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//               <LockOutlinedIcon />
//               {/* <img className="logo" alt="logo" src={LogoImg} /> */}
//             </Avatar>
//             <Typography component="h1" variant="h5" color="coral" font-fontWeight="bold">
//               Bravo Silver Life
//             </Typography>
//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="아이디를 입력해주세요"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="비밀번호를 입력해주세요"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
//               <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="저장하기"
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//                 size="large"
//                 color="error.light"
//               >
//                 로그인하기
//               </Button>
//               <Grid container>
//                 <Grid item xs>
//                   <Link href="#" variant="body2">
//                     비밀번호를 찾으시겠습니까?
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Link href="#" variant="body2">
//                     {"회원가입이 안되어 있나요? 회원가입하기"}
//                   </Link>
//                 </Grid>
//               </Grid>
//               <Copyright sx={{ mt: 5 }} />
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }