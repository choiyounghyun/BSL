import React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainNavBar from "../components/common/MainNavBar.js"

function router() {
  return (
    <>
      <MainNavBar />
      <div id="router">
        <div>hi</div>
        <Suspense>
          <Routes>
            <Route>
            </Route>
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default router;
