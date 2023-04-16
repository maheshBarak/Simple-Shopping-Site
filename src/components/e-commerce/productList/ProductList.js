import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../redux/slice/productSlice";
import SingleProduct from "../singleProduct/SingleProduct";
import "./productList.css";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.product);
  const status = useSelector((state) => state.productReducer.status);
  const error = useSelector((state) => state.productReducer.error);

  useEffect(() => {
    // fetchData();
    dispatch(fetchData());
  }, []);

  /* async function fetchData() {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json();
    dispatch(loadProduct(jsonData));
  } */

  if (status === "loading") {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    return (
      <Spin
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
        indicator={antIcon}
      />
    );
  }
  if (status === "failed") {
    return (
      <>
        <h3>Something Went Wrong !!</h3>
        Error : {error}
      </>
    );
  }

  return (
    <div className="ProductList">
      {products.map((item) => (
        <SingleProduct product={item} key={item.id} />
      ))}
    </div>
  );
}

export default ProductList;
