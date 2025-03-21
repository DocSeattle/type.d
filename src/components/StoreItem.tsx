import { useState } from 'react';
import './StoreItem.scss';

interface ItemProps {
  id: string,
  image?: string,
  title: string,
  description?: string,
  price: string,
  callback?: (id: string, count: number) => void;
  inCart?: boolean;
  itemsInCart?: number // updated state value (doesn't work.)
}
export const StoreItem = ({ ...args }: ItemProps) => {
  const [count, setCount] = useState(0);
  const handleRemove = () => {
    if (count <= 0) { setCount(0); return; }
    setCount(count - 1);
    if (args.callback) {
      args.callback(args.id, count);
    }
    return;
  }
  const handleAdd = () => {
    if (count >= 10) { setCount(10); return; }
    setCount(count + 1);
    if (args.callback) {
      args.callback(args.id, count);
    }
    return;
  }
  switch (args.inCart) {
    case true:
      return (
        <h3>
          <span>{count}x</span>
          <span>{args.title}</span>
          <span>{args.price}</span>
        </h3>
      );
    case false:
      return (
        <div className="item-card">
          <img className="item-image" src={args.image || "sample.jpg"} />
          <h2 className="item-title">{args.title || "empty"}</h2>
          <hr />
          <div className="item-desription">
            <h4 className="item-description">Description</h4>
            <p>{args.description || "Lorem Ipsum Dolor Et"}</p>
          </div>
          <div className="item-bottom-container">
            <span className="item-button">
              <span className="item-button-left" onClick={() => handleRemove()}>&nbsp;-</span>
              <span className="item-button-middle"> {args.price || "N/A"} </span>
              <span className="item-button-right" onClick={() => handleAdd()}>+&nbsp;</span>
            </span>
            <span className="item-count">In cart: <span id={args.id}>{`${count}`}</span></span>
          </div>
        </div>
      )
  }
}

