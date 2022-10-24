import React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

function router() {
  return (
    <>
      {/* <MainNavBar /> */}
      <div id="router">
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
