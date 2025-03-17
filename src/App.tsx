import { Route, Routes } from "react-router";
import SoloPage from "./pages/SoloPage.tsx"
import Home from "./pages/Home.tsx"
import Store from "./pages/Store.tsx";
import './App.scss';

/** 
    * TODO:
    * Routing
    * */

function App() {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={"/Home"} element={<Home />} />
      <Route path={"/Solo"} element={<SoloPage />} />
      <Route path={"/Store"} element={<Store />} />
    </Routes>
  )
}

export default App
