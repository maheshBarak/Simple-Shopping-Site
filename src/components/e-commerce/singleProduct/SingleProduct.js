import React from "react";
import "./singleProduct.css";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/slice/cartSlice";
function SingleProduct({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  //  console.log(cart);
  const curItem = cart.find((item) => item.id == product.id);
  const curQuantity = curItem ? curItem.quantity : 0;
  return (
    <div className="singleProduct">
      <img className="productImg" src={product.image} alt={product.title} />
      <div className="productInfo">
        <h2 className="productTitle">{product.title}</h2>
        <p className="productPrice">
          <BsCurrencyDollar />
          {product.price}
        </p>
      </div>
      <div className="cartInfo">
        <button
          className="button"
          onClick={() => dispatch(removeFromCart(product.id))}
        >
          -
        </button>
        <h4>{curQuantity}</h4>
        <button className="button" onClick={() => dispatch(addToCart(product))}>
          +
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
