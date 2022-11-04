import "./App.css";
import Router from "./routers/Router";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

function App() {
  const [authenticate, setAuthenticate] = useState(false) // true 이면 로그인

  return (
    <Router />
  )
}

export default App;
