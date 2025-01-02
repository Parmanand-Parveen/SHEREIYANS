import { useState } from "react";
import Nav from "./components/Nav";
import { Route, Router, Routes } from "react-router";
import Home from "./components/Home";
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import AddProduct from "./components/AddProduct";
import Edit from "./components/Edit";

function App() {
  

  return (
    <div>
      <Nav />
      <div className="min-h-screen">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:id" element={<ProductDetails/>} />
      <Route path="/about" element={<About />} />
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/editproduct/:id" element={<Edit />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
