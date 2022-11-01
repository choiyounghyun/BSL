import React from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../screens/Login.js";
import User from "./User"



function router() {

  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path="/*" element={<User />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default router;

    // <MainNavBar />
    // <div id="router">
    //   <Suspense>
    //     <Routes>
    //       <Route path="/" element={<Main />} />
    //       <Route path="/anal" element={<Analysis />} />
    //       <Route path="/community" element={<Community />} />
    //       <Route path="/ranking" element={<Ranking />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/join" element={<Join />} />
    //     </Routes>
    //   </Suspense>
    // </div>