import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate, Link } from "react-router-dom";

import logoDw from "../../assets/DumbMerch.png";

import { API } from "../../config/api";

const NavbarAll = (props) => {
  let navigate = useNavigate();

  const [state, dispatch] = useContext(UserContext);

  const [customer, setCustomer] = useState(false);

  useEffect(() => {
    if (state.user.status === "customer") {
      setCustomer(true);
    }
  }, []);

  const logout = () => {
    console.log(state);
    dispatch({
      type: "LOGOUT",
    });
    navigate("/auth");
  };

  return (
    <div>
      <nav class="flex justify-between items-center mx-32 py-7 bg-black">
        <div>
          <img src={logoDw} alt="logo" className="w-16" />
        </div>
        <div className="text-white text-lg font-bold flex items-center relative space-x-5">
          {customer ? (
            <div className="text-white text-lg font-bold flex items-center relative space-x-5">
              <h1
                className={
                  props?.title === "Product" ? `text-white` : `text-brand-red`
                }
              >
                Welcome, {state.user.name}{" "}
              </h1>
              <Link
                to="/"
                className={
                  props?.title === "Product" ? `text-brand-red` : `text-white`
                }
              >
                <h1>Product</h1>
              </Link>
              <Link
                to="/complain"
                className={
                  props?.title === "Complain" ? `text-brand-red` : `text-white`
                }
              >
                <h1>Complain</h1>
              </Link>
              <Link
                to="/profile"
                className={
                  props?.title === "Profile" ? `text-brand-red` : `text-white`
                }
              >
                <h1>Profile</h1>
              </Link>
              <button className="font-bold" onClick={logout}>
                <h1>Logout</h1>
              </button>
            </div>
          ) : (
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
                  props?.title === "Product Admin"
                    ? `text-brand-red`
                    : `text-white`
                }
              >
                <h1>Product</h1>
              </Link>
              <button className="font-bold" onClick={logout}>
                <h1>Logout</h1>
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavbarAll;
