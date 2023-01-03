import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const handleClick = (e) => {
    setIsInCart(isInCart => !isInCart)
  }
  // { addItem ? "Add to Cart" : "Remove From Cart" }
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "add"} onClick={handleClick}>{isInCart ? "Remove from cart" : "Add to Cart"}</button>
    </ li>
  );
}

export default Item;
