import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)

  const handleAddToCart = () => {
    setIsInCart((isInCart) => !isInCart)
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart} onClick={handleAddToCart}>{!isInCart ? "Add to" : "Remove From"} Cart</button>
    </li>
  );
}

export default Item;
