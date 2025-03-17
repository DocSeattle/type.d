import { useState } from 'react';
import './StoreItem.scss';

interface ItemProps {
  id: string,
  image: string,
  title: string,
  description: string,
  price: string,
}
export default function StoreItem({ id, image, title, description, price }: ItemProps) {
  const [count, setCount] = useState(0);
  const handleRemove = () => {
    if (count <= 0) { setCount(0); return; }
    setCount(count - 1);
    return;
  }
  const handleAdd = () => {
    if (count >= 10) { setCount(10); return; }
    setCount(count + 1);
    return;
  }
  return (
    <div className="item-card">
      <img className="item-image" src={image || "sample.jpg"} />
      <h2 className="item-title">{title || "empty"}</h2>
      <hr />
      <div className="item-desription">
        <h4 className="item-description">Description</h4>
        <p>{description || "Lorem Ipsum Dolor Et"}</p>
      </div>
      <div className="item-bottom-container">
        <span className="item-button">
          <span className="item-button-left" onClick={() => handleRemove()}>&nbsp;-</span>
          <span className="item-button-middle"> {price || "N/A"} </span>
          <span className="item-button-right" onClick={() => handleAdd()}>+&nbsp;</span>
        </span>
        <span className="item-count">In cart: <span id={id}>{count}</span></span>
      </div>
    </div>
  )
}

