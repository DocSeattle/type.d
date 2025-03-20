import { useState } from "react"
import Navigation from "../components/Navigation";
import Background from "../components/Background";
import { StoreItem } from "../components/StoreItem";
import "./Store.scss";

export default function Store() {
  const [cart, setCart] = useState([
    {
      id: "keb-1",
      count: 0,
    },
    {
      id: "dip-1",
      count: 0,
    }
  ]);
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
  const dataFromChild = (id: string, count: number) => {
    const index = cart.findIndex((el) => el.id == id);
    cart[index].count = count;
    setCart(cart);
  }
  return (

    <>
      <Background />
      <Navigation />
      <div className="store-container">
        <div className="item-container">
          {availableItems.map((item, index) =>
            <StoreItem key={index} image={item.image} title={item.name} description={item.description} price={item.price} id={item.id} callback={dataFromChild} inCart={false} />
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
          {cart.map((item, index) => {
            // I can not for the life of me get the span to change number at the same rate as the state.
            const aIndex = availableItems[availableItems.findIndex((el) => el.id == item.id)];
            return (
              <StoreItem key={index} title={aIndex.name} price={aIndex.price} id={aIndex.id} itemsInCart={cart[index].count} inCart={true} />
            )
          })}
          <button >Update Cart</button>
        </div>
      </div>
    </>
  )
}
