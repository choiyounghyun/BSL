import React from "react";
import { Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainNavBar from "../components/common/MainNavBar.js";
import Main from "../screens/Main.js";
import Analysis from "../screens/analysis/Analysis";
import Community from "../screens/Community.js";
import Ranking from "../screens/Ranking.js";
import SignIn from "../screens/SignIn"
import SignUp from "../screens/SignUp.js";
import MyPage from "../screens/MyPage.js";
import SupportList from "../components/community/SupportList.js";
import ShareList from "../components/community/ShareList.js";
import RequestList from "../components/community/RequestList.js";


function Router() {
  const [authenticate, setAuthenticate] = useState(false) // treu이면 로그인

  useEffect(() => {
    console.log("aaaa", authenticate)
  }, [authenticate])

  return (
    <>
      <MainNavBar />
      <div id="router">
        <Suspense>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/anal" element={<Analysis />} />
            <Route path="/article">
              <Route index element={<Community />} />
              <Route path="support" element={<SupportList />} />
              <Route path="share" element={<ShareList />} />
              <Route path="request" element={<RequestList />} />
            </Route>
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/login" element={<SignIn setAuthenticate={setAuthenticate} />} />
            <Route path="/join" element={<SignUp />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}


export default Router;
