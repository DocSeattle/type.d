import Navigation from "../components/Navigation";
import Background from "../components/Background";
import { StoreItem } from "../components/StoreItem";
import "./Store.scss";
import { useState } from "react";

const initial = [0, 0];
export default function Store() {
  const [cart, setCart] = useState(initial)
  const availableItems = [{
    image: "https://placehold.co/600x400",
    name: "Keyboard",
    description: "A keyboard",
    price: "100",
  },
  {
    image: "https://placehold.co/600x400",
    name: "Joke diploma",
    description: "Gloat about your typing speed",
    price: "5",
  }]
  const foo = (index: number, count: number) => {
    const bar = cart.map((c, i) => {
      if (i == index) {
        return c = count;
      } else {
        return c;
      }
    });
    setCart(bar);
  }
  return (

    <>
      <Background />
      <Navigation />
      <div className="store-container">
        <div className="item-container">
          {availableItems.map((item, index) =>
            <StoreItem key={index} index={index}
              image={item.image} title={item.name} description={item.description} price={item.price} // interface attributes
              callback={foo}
            />
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
          <h2>Shipping will be calculated in the next steps.</h2>
        </div>
      </div>
    </>
  )
}
