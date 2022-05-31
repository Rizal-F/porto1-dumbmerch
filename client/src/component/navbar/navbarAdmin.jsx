import React from "react";
// import { Link } from "react-router-dom";
import logoDw from "../../assets/DumbMerch.png";
import { Link } from "react-router-dom";

const NavbarAdmin = (props) => {
  return (
    <div>
      <nav class="flex justify-between items-center mx-32 py-7 bg-black">
        <div>
          <img src={logoDw} alt="logo" className="w-16" />
        </div>
        <div className="text-white text-lg font-bold flex items-center relative space-x-5">
          <Link
            to="/complain-admin"
            className={
              props?.title === "Complain Admin"
                ? `text-brand-red`
                : `text-white`
            }
          >
            <h1>Complain</h1>
          </Link>
          <Link
            to="/category-admin"
            className={
              props?.title === "Category Admin"
                ? `text-brand-red`
                : `text-white`
            }
          >
            <h1>Category</h1>
          </Link>
          <Link
            to="/product"
            className={
              props?.title === "Product Admin" ? `text-brand-red` : `text-white`
            }
          >
            <h1>Product</h1>
          </Link>
          <Link to="/auth">
            <h1>Logout</h1>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavbarAdmin;
