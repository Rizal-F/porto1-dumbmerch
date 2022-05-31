import React from "react";
import { Link } from "react-router-dom";
// import Product2 from "../../assets/product2.png";

const ProductCard = (props) => {
  const { product, price, stock, img } = props;

  return (
    <Link to="/detail-product">
      <div className="bg-brand-dark-grey w-60 rounded-lg">
        <div>
          <img src={img} alt="product" />
        </div>
        <div className=" text-white py-2 pl-4">
          <div className="text-brand-red text-lg font-bold pb-1">{product}</div>
          <div class="text-sm">{price}</div>
          <div class="text-sm">Stock : {stock}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
