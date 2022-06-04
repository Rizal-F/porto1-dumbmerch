import React, { useState } from "react";
import { Link } from "react-router-dom";
import rupiahFormat from "rupiah-format";
// import Product2 from "../../assets/product2.png";

const ProductCard = ({ item, loading }) => {
  const { name, price, qty, image } = item;

  // const [delay, setDelay] = useState()
  return (
    <Link to={`/detail-product/${item.id}`}>
      {!loading ? (
        <>
          <div className="bg-brand-dark-grey w-60 rounded-lg">
            <div className="rounded-md">
              <img src={image} alt="product" />
            </div>
            <div className=" text-white py-2 pl-4">
              <div className="text-brand-red text-lg font-bold pb-1">
                {name}
              </div>
              <div class="text-sm">{rupiahFormat.convert(price)}</div>
              <div class="text-sm">Stock : {qty}</div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-brand-dark-grey w-60 rounded-lg">
            <div className="rounded-md">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  height: "200px",
                  alignItems: "center",
                }}
              >
                <div class="sk-chase">
                  <div class="sk-chase-dot"></div>
                  <div class="sk-chase-dot"></div>
                  <div class="sk-chase-dot"></div>
                  <div class="sk-chase-dot"></div>
                  <div class="sk-chase-dot"></div>
                  <div class="sk-chase-dot"></div>
                </div>
              </div>
            </div>
            <div className=" text-white py-2 pl-4">
              <div className="text-brand-red text-lg font-bold pb-1">
                {name}
              </div>
              <div class="text-sm">{rupiahFormat.convert(price)}</div>
              <div class="text-sm">Stock : {qty}</div>
            </div>
          </div>
        </>
      )}
    </Link>
  );
};

export default ProductCard;
