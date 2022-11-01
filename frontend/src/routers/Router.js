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
