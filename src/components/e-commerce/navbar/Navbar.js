import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./navbar.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const cart = useSelector((state) => state.cartReducer.cart);

  const navigate = useNavigate();

  let count = 0;
  cart.forEach((item) => {
    count = count + item.quantity;
  });
  function SendToHome(e) {
    e.preventDefault();
    navigate("/");
  }
  function handleSubmit(e) {
    e.preventDefault();
    //  console.log(cart);
    navigate("/shoppingCart");
  }
  return (
    <nav>
      <h1 className="banner" onClick={SendToHome}>
        Flip Zon
      </h1>
      <div className="right-layout">
        <div className="cart-layout" onClick={handleSubmit}>
          <AiOutlineShoppingCart style={{ width: "40px", height: "40px" }} />
          <h3>{count}</h3>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
