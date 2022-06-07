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

  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = "SB-Mid-client-pqxbQKlhow9771qF";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  const handleBuy = async () => {
    try {
      // Get data from product
      const data = {
        idProduct: product.id,
        idSeller: product.user.id,
        price: product.price,
      };

      // Data body
      const body = JSON.stringify(data);
      console.log(body);

      // Configuration
      const config = {
        headers: {
          Authorization: "Basic " + localStorage.token,
          "Content-type": "application/json",
        },
      };

      // Insert transaction data
      const response = await API.post("/transaction", body, config);
      console.log(response.data.payment.token);
      // Create variabel for store token payment from response here ...
      const token = response.data.payment.token;

      // Init Snap for display payment page with token here ...
      window.snap.pay(token, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          navigate("/profile");
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          navigate("/profile");
        },
        onError: function (result) {
          /* You may add your own implementation here */
          console.log(result);
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert("you closed the popup without finishing the payment");
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

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
          <button
            onClick={handleBuy}
            className="bg-brand-red hover:bg-brand-red-hover w-full py-2 rounded-md mt-5"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
