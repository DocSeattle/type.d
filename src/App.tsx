import { Route, HashRouter as Router, Routes } from "react-router";
import SoloPage from "./pages/SoloPage.tsx"
import Home from "./pages/Home.tsx"
import './App.scss';

/** 
    * TODO:
    * Routing
    * */

function App() {

  return (
    <>
        <Routes>
            <Route index element={<Home />} />
            <Route path={"/", "/home", "/Home"} element={<Home />} />
            <Route path={"/solo", "/Solo"} element={<SoloPage />} />
        </Routes>
    </>
  )
}

export default App
