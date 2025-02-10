import { useState } from 'react';
import Navigation from "./components/Navigation.tsx";
import './App.scss';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
    </>
  )
}

export default App
