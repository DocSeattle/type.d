import { useState } from "react"
import Navigation from "../components/Navigation";
import Background from "../components/Background";



export default function Store() {
  const [cart, setCart] = useState([]);
  const availableItems = [{
    image: "",
    name: "Keyboard",
    desc: "A keyboard",
    price: "$100",
  },
  {
    image: "",
    name: "Gag diploma",
    desc: "Gloat about your typing speed",
    price: "$5",
  }]
  return (
    <>
      <Navigation />
      <div className="store-container">
        <div className="item-container">
          { } map availableItems here to display a grid.
        </div>
      </div>
      <Background />
    </>
  )
}
