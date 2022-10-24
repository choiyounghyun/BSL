import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

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
