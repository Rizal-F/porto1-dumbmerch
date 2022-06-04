import { useState, useEffect } from "react";

import NavbarAll from "../component/auth/navbar";
import ProductCard from "../component/card/productCard";

// import Product1 from "../assets/product1.png";
// import Product2 from "../assets/product2.png";

import { API } from "../config/api";

const Product = () => {
  const title = "Product";
  document.title = "DumbMerch | " + title;
  // Variabel for store product data
  const [products, setProducts] = useState();

  //state for loading image
  const [isLoading, setIsLoading] = useState(false);

  // Get product data from database
  const getProducts = async () => {
    setIsLoading(true);

    try {
      const response = await API.get("/products");
      // Store product data to useState variabel
      setProducts(response.data.data.listProduct);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="bg-black">
      <NavbarAll title={title} />
      <h1 className="text-brand-red font-bold text-2xl mx-32 mb-5">Product</h1>
      <div className="flex mx-32 space-x-4">
        {products?.map((item, index) => (
          <ProductCard key={index} item={item} loading={isLoading} />
        ))}
      </div>
    </div>
  );
};

export default Product;
