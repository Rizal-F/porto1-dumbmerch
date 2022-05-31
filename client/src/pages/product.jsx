import Navbar from "../component/navbar/navbar";
import ProductCard from "../component/card/productCard";
import Product1 from "../assets/product1.png";
import Product2 from "../assets/product2.png";

import React from "react";

const Product = () => {
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <h1 className="text-brand-red font-bold text-2xl mx-32 mb-5">Product</h1>
      <div className="flex mx-32 space-x-4">
        <ProductCard
          product="Mouse"
          price="Rp.500.000"
          stock="600"
          img={Product2}
        />
        <ProductCard
          product="Keyboard"
          price="Rp.700.000"
          stock="600"
          img={Product1}
        />
      </div>
    </div>
  );
};

export default Product;
