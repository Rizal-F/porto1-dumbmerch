import React from "react";
import { NavLink } from "react-router-dom";
import logoDw from "../../assets/DumbMerch.png";

const Navbar = (props) => {
  return (
    <div>
      <nav class="flex justify-between items-center mx-32 py-7 bg-black">
        <div>
          <NavLink to="/">
            <img src={logoDw} alt="logo" className="w-16" />
          </NavLink>
        </div>
        <div className="text-white text-lg font-bold flex items-center relative space-x-5">
          <NavLink
            to="/complain"
            className={
              props?.title === "Complain" ? `text-brand-red` : `text-white`
            }
          >
            <h1>Complain</h1>
          </NavLink>
          <NavLink
            to="/profile"
            className={
              props?.title === "Profile" ? `text-brand-red` : `text-white`
            }
          >
            <h1>Profile</h1>
          </NavLink>
          <NavLink to="/auth">
            <h1>Logout</h1>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
