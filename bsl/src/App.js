import "./App.css";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <MainNavBar /> */}
      <Suspense>
        <Routes>
          <Route></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
