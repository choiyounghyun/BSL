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
