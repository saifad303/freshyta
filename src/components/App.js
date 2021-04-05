import React from "react";
import "../css/all.min.css";
import "../css/bootstrap.min.css";
import "../css/responsive.css";
import "../css/style.css";
import Master from "./pages";
import Cart from "../context/cart/Cart";

function App() {
  return (
    <Cart>
      <Master />
    </Cart>
  );
}

export default App;
