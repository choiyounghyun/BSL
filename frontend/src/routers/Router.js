

import React, { Suspense } from "react";
import "./Router.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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
import { useState, useEffect } from "react";


function Router() {
  const location = useLocation();
  const [authenticate, setAuthenticate] = useState(false) // true이면 로그인

  useEffect(() => {
    console.log("aaaa", authenticate)
  }, [authenticate])
  return (
    <div className="router">
      <Suspense>
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={1000}
          >
            <Routes location={location}>
              <Route path="/" element={<Main />} />
              <Route path="/article">
                <Route index element={<Community />} />
                <Route path="support" element={<SupportList />} />
                <Route path="share" element={<ShareList />} />
                <Route path="request" element={<RequestList />} />
              </Route>
              <Route path="/ranking" element={<Ranking />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/anal" element={<Analysis />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </Suspense>
    </div>
  );
}

export default Router;

