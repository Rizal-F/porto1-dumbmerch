import Product2 from "../assets/product2.png";
import rupiahFormat from "rupiah-format";
import NavbarAll from "../component/auth/navbar";

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { API } from "../config/api";

const DetailProduct = () => {
  const title = "Product";
  document.title = "DumbMerch | " + title;
  let navigate = useNavigate();
  let { id } = useParams();

  const [product, setProduct] = useState({});

  // Fetching detail product data by id from database
  const getProduct = async (id) => {
    try {
      const response = await API.get("/product/" + id);
      // Store product data to useState variabel
      setProduct(response.data.data.getProduct);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <div className="bg-black">
      <NavbarAll title={title} />
      <div className="flex items-start">
        <div className="basis-2/5 ml-32 py-10">
          <img
            className="w-80 rounded-md"
            src={product?.image}
            alt="product2"
          />
        </div>
        <div className="text-white basis-3/5 mr-40">
          <h1 className="text-brand-red text-3xl font-bold">{product?.name}</h1>
          <p className="mt-2 mb-9">Stock : {product?.qty}</p>
          <p className="text-justify">{product?.desc}</p>
          <p className="text-right text-brand-red text-2xl font-bold">
            {/* {product?.price} */}
            {rupiahFormat.convert(product?.price)}
          </p>
          <button className="bg-brand-red hover:bg-brand-red-hover w-full py-2 rounded-md mt-5">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
