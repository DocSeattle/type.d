import { Route, Routes } from "react-router";
import SoloPage from "./pages/SoloPage.tsx"
import Home from "./pages/Home.tsx"
import Store from "./pages/Store.tsx";
// import AuthProvider from "./components/AuthProvider.tsx";
import './App.scss';

/** 
    * TODO:
    * Routing
    * */

function App() {

  return (
    //<AuthProvider>
    <Routes>
      <Route index path={"/"} element={<Home />} />
      <Route path={"/solo"} element={<SoloPage />} />
      <Route path={"/store"} element={<Store />} />
    </Routes>
    // </AuthProvider>
  )
}

export default App
