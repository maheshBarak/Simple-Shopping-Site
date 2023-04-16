import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/e-commerce/navbar/Navbar";
import ProductList from "./components/e-commerce/productList/ProductList";
import ShoppingCart from "./components/e-commerce/shoppingCart/ShoppingCart";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/*  <Home element={ProductList} /> */}
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
