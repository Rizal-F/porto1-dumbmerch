import NavbarAll from "../component/auth/navbar";
import BlankProfile from "../assets/default-user.png";
import Product2 from "../assets/product2.png";
import logoDw from "../assets/DumbMerch.png";

import { Link } from "react-router-dom";

import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";

import { API } from "../config/api";

const Profile = () => {
  // let { id } = useParams();

  const title = "Profile";
  document.title = "Dumbmerch | " + title;

  const [state] = useContext(UserContext);

  console.log(state.user.id);

  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  //fetch data
  const getProfile = async () => {
    setIsLoading(true);
    try {
      const response = await API.get("/user/" + state.user.id);
      // Store product data to useState variabel
      setProfile(response.data.data.users);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      // console.log(response.data.data.users);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className="bg-black">
      <NavbarAll title={title} />
      <div className="flex">
        <div className="mx-32 py-7 basis-1/2">
          <h1 className="text-brand-red font-bold text-2xl mb-10">
            My Profile
          </h1>
          <div className="flex items-start">
            <div className="flex flex-col items-center">
              {!isLoading ? (
                <>
                  <img
                    className="w-64 rounded-md mb-2"
                    src={profile?.image ? profile.image : BlankProfile}
                    // src={BlankProfile}
                    alt="profile"
                  />
                </>
              ) : (
                <>
                  <div
                    style={{
                      width: "200px",
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
                </>
              )}
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
              <p className="text-white ml-6 mb-3">{profile.name}</p>
              <h2 className="text-brand-red font-semibold text-xl ml-6 mb-1">
                Email
              </h2>
              <p className="text-white ml-6 mb-3">{profile.email}</p>
              <h2 className="text-brand-red font-semibold text-xl ml-6 mb-1">
                Phone
              </h2>
              <p className="text-white ml-6 mb-3">
                {profile.phone !== null ? profile.phone : "-"}
              </p>
              <h2 className="text-brand-red font-semibold text-xl ml-6 mb-1">
                Gender
              </h2>
              <p className="text-white ml-6 mb-3">
                {profile.gender !== null ? profile.gender : "-"}
              </p>
              <h2 className="text-brand-red font-semibold text-xl ml-6 mb-1">
                Address
              </h2>
              <p className="text-white ml-6 mb-3">
                {profile.address !== null ? profile.address : "-"}
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
