import React from "react";
import "./singleProduct.css";
import { BsCurrencyDollar } from "react-icons/bs";
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
      <div className="image">
        <img className="productImg" src={product.image} alt={product.title} />
      </div>
      <div className="exclude-img">
        <div className="productInfo">
          <h4 className="productTitle">{product.title}</h4>
          <h5 className="productPrice">
            <BsCurrencyDollar />
            {product.price}
          </h5>
        </div>
        <div className="cartInfo">
          <button
            className="button"
            onClick={() => dispatch(removeFromCart(product.id))}
          >
            -
          </button>
          <h4>{curQuantity}</h4>
          <button
            className="button"
            onClick={() => dispatch(addToCart(product))}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
