import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductList from "./components/ProductList";
import AddnewProduct from "./components/AddnewProduct";
import ProductDetails from "./components/ProductDetails";
import EditProduct from "./components/EditProduct";

const App = () => {
  const [allproducts, setAllProducts] = useState([]);
  const fetchAllProducts = async () => {
    fetch("http://localhost:3500/items")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllProducts(data);
      });
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);
  const [cart, setCart] = useState(0);
  const [search, setSearch] = useState("");
  return (
    <div>
      <Navbar
        cart={cart}
        search={search}
        setSearch={setSearch}
        allproducts={allproducts}
        setAllProducts={setAllProducts}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/productList"
          element={
            <ProductList
              setCart={setCart}
              allproducts={allproducts.filter((product) =>
                product.title.toLowerCase().includes(search.toLowerCase())
              )}
              setAllProducts={setAllProducts}
              fetchAllProducts={fetchAllProducts}
            />
          }
        />
        <Route path="/addproduct" element={<AddnewProduct />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route
          path="/Edit/:id"
          element={<EditProduct fetchAllProducts={fetchAllProducts} />}
        />
      </Routes>
    </div>
  );
};

export default App;
