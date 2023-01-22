import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData)
  const [isDarkMode, setIsDarkMode] = useState(true)

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const handleClick = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode)
    console.log(isDarkMode)

  }


  const appClass = isDarkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick} >{isDarkMode ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
