import Navbar from "../component/navbar/navbar";
import BlankProfile from "../assets/blank-profile.png";
import Product2 from "../assets/product2.png";
import logoDw from "../assets/DumbMerch.png";

import { Link } from "react-router-dom";

import React from "react";

const Profile = () => {
  const title = "Profile";
  return (
    <div className="bg-black h-screen">
      <Navbar title={title} />
      <div className="flex">
        <div className="mx-32 py-7 basis-1/2">
          <h1 className="text-brand-red font-bold text-2xl mb-10">
            My Profile
          </h1>
          <div className="flex items-start">
            <div className="flex flex-col items-center">
              <img
                className="w-64 rounded-md mb-2"
                src={BlankProfile}
                alt="profile"
              />
              <Link to="/edit-profile">
                <button className="bg-brand-red-hover hover:bg-red-800 px-5 py-1 rounded-md text-white font-semibold">
                  Edit Profile
                </button>
              </Link>
            </div>
            <div className="">
              <h2 className="text-brand-red font-semibold text-xl ml-6 mb-1">
                Name
              </h2>
              <p className="text-white ml-6 mb-3">Muhammad Rizal Fakhruddin</p>
              <h2 className="text-brand-red font-semibold text-xl ml-6 mb-1">
                Email
              </h2>
              <p className="text-white ml-6 mb-3">fachruddin18genz@gmail.com</p>
              <h2 className="text-brand-red font-semibold text-xl ml-6 mb-1">
                Phone
              </h2>
              <p className="text-white ml-6 mb-3">081229474378</p>
              <h2 className="text-brand-red font-semibold text-xl ml-6 mb-1">
                Gender
              </h2>
              <p className="text-white ml-6 mb-3">Man</p>
              <h2 className="text-brand-red font-semibold text-xl ml-6 mb-1">
                Address
              </h2>
              <p className="text-white ml-6 mb-3">
                Jl. Bubulak Gardu No.27, RT.02/RW.11, Bubulak, Kec. Bogor Bar.,
                Kota Bogor, Jawa Barat 16115
              </p>
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <h1 className="text-brand-red font-bold text-2xl mb-10">
            My Transaction
          </h1>
          <div className="bg-brand-dark-grey rounded-xl flex items-center space-x-5 mr-20 p-5">
            <div>
              <img className="w-32 rounded-sm" src={Product2} alt="product2" />
            </div>
            <div className="">
              <h1 className="text-brand-red font-bold text-lg">Mouse</h1>
              <p className="text-brand-red text-sm">
                <b>Sunday</b>, 14 July 2022
              </p>
              <p className="text-white text-sm mt-2">Price : Rp.500.000</p>
              <p className="text-white text-sm font-bold mt-10">
                Sub Total : Rp.500.000
              </p>
            </div>
            <div>
              <img className="w-20 ml-5" src={logoDw} alt="logodw" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
