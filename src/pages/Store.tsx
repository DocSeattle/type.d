import { useState } from "react"
import Navigation from "../components/Navigation";
import Background from "../components/Background";
import StoreItem from "../components/StoreItem";
import "./Store.scss";


export default function Store() {
  const availableItems = [{
    id: "keb-1",
    image: "",
    name: "Keyboard",
    description: "A keyboard",
    price: "100",
  },
  {
    id: "dip-1",
    image: "",
    name: "Joke diploma",
    description: "Gloat about your typing speed",
    price: "5",
  }]

  const [cart, setCart] = useState([{
    id: "",
    count: ""
  }]);
  const handleUpdateCart = () => {
    const items = availableItems;
    items.map((i, index) => {
      const itemId = i.id;
      const itemCount = document.getElementById(i.id)!.innerText;
      const newArr = cart;
      newArr[index] = { id: itemId, count: itemCount }
      setCart(newArr);
    })
    return console.log(cart);
  }
  return (
    <>
      <Background />
      <Navigation />
      <div className="store-container">
        <div className="item-container">
          {availableItems.map(item =>
            <StoreItem image={item.image} title={item.name} description={item.description} price={item.price} id={item.id} />
          )}
        </div>
      </div>
      <div className="store-checkout">
        <form className="checkout">
          <label htmlFor="firstName" >First Name:&nbsp; </label>
          <input type="text" name="firstName" placeholder="First Name" />
          <label htmlFor="lastName" >Last Name:&nbsp; </label>
          <input type="text" name="lastName" placeholder="Last Name" />
          <label htmlFor="adress" >Adress:&nbsp; </label>
          <input type="text" name="firstName" placeholder="Adress" />

          <label htmlFor="cardName">Name on card:&nbsp; </label>
          <input type="text" name="cardName" placeholder="Jane Doe" />
          <label htmlFor="cardNumber" >Card Number:&nbsp; </label>
          <input type="number" name="cardNumber" placeholder="0000 0000 0000 0000" />
          <label htmlFor="cvc" >CVC:&nbsp; </label>
          <input type="number" name="cvc" placeholder="000" />
          <button type="submit">Confirm & Pay</button>
        </form>
        <div className="store-cart">
          <button onClick={() => handleUpdateCart()} >Update Cart</button>
          { /**cart.map((item, index) => {
            if (item.count == "0") { return; }
            return (
              <div>
                <h2>{availableItems[index].name}</h2>
                <hr />
                <h3>{availableItems[index].price}</h3>
              </div>
            )
          }) */}
        </div>
      </div>
    </>
  )
}
