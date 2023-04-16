import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./shoppingCart.css";
import { ImCancelCircle } from "react-icons/im";
import { removeItem } from "../../../redux/slice/cartSlice";
import image from "./7612.jpg";
import { useNavigate } from "react-router-dom";

function ShoppingCart() {
  const cart = useSelector((state) => state.cartReducer.cart);
  // console.log(cart);
  let amount = 0;
  cart.map((item) => {
    amount = amount + item.price * item.quantity;
  });

  const navigate = useNavigate();

  function SendToHome(e) {
    e.preventDefault();
    navigate("/");
  }

  const dispatch = useDispatch();
  if (cart.length === 0) {
    return (
      <>
        <img className="cart-image" src={image} alt="empty cart image" />
        <h1>Your cart is empty</h1>
        <p>You have no item in your shopping cart.</p>
        <p>Let's go buy something !!</p>
        <button className="shop" onClick={SendToHome}>
          Shop now
        </button>
      </>
    );
  }
  //  console.log(amount);
  return (
    <div className="ShoppingCart">
      {cart.map((item) => {
        return (
          <div className="item-product" key={item.id}>
            <section className="image-title">
              <img src={item.image} alt={item.title} />
              <section className="inside-Section">
                <h4 className="title">{item.title}</h4>
                <p>$ {item.price}</p>
              </section>
            </section>
            <section className="quantity">
              <h3>{item.quantity}</h3>
              <button
                className="remove"
                onClick={() => dispatch(removeItem(item.id))}
              >
                <ImCancelCircle className="btn remove" />
              </button>
            </section>
          </div>
        );
      })}
      <h2 className="total">Total : $ {amount.toFixed(3)}</h2>
    </div>
  );
}

export default ShoppingCart;
