import React from "react";
import { Suspense } from "react";
import { Route, Routes, withRouter } from "react-router-dom";
import MainNavBar from "../components/common/MainNavBar.js";
import Main from "../screens/Main.js";
import Analysis from "../screens/Analysis.js";
import Community from "../screens/Community.js";
import Ranking from "../screens/Ranking.js";
import Login from "../screens/Login.js";
import Join from "../screens/Join.js";
import MyPage from "../screens/MyPage.js";

// const BaseRouter = withRouter(({ location }) => {

//   return (
//     <div>
//       {/* // '/' 주소일시, 즉 Login Route를 보여줄 때에만, Navigation 메뉴가 나타나지 않도록 만든다. */}
//       {location.pathname != '/' && <MainNavBar />}
//       <Route path="/login" exact={true} component={Login} />
//       <Route path="/home" component={Home} />
//       <Route path="/about" component={About} />
//     </div>

//   )
// })


function router() {
  return (
    <>
      <MainNavBar />
      <div id="router">
        <Suspense>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/anal" element={<Analysis />} />
            <Route path="/community" element={<Community />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default router;
