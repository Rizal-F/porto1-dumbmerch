import NavbarAll from "../component/auth/navbar";
import BlankProfile from "../assets/default-user.png";
// import Product2 from "../assets/product2.png";
import logoDw from "../assets/DumbMerch.png";
import dateFormat from "dateformat";
import rupiahFormat from "rupiah-format";

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
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //fetch data
  const getProfile = async () => {
    setIsLoading(true);
    try {
      const response = await API.get("/user/" + state.user.id);
      // Store product data to useState variabel
      setProfile(response.data.data.users);
      console.log(response.data.data.users);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      // console.log(response.data.data.users);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const getTransactions = async () => {
    try {
      const response = await API.get("/transactions");
      // Store transaction data to useState variabel
      setTransactions(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
    getTransactions();
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
                  {profile.image !== null ? (
                    <>
                      <img
                        className="w-64 rounded-md mb-2"
                        src={profile.image}
                        // src={BlankProfile}
                        alt="profile"
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src={BlankProfile}
                        alt="img"
                        className="w-64 rounded-md mb-2"
                        // style={{ width: "49px" }}
                      />
                    </>
                  )}
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
          {transactions.length !== 0 ? (
            <>
              <div className="space-y-3">
                {transactions?.map((item, index) => (
                  <div
                    key={index}
                    className="bg-brand-dark-grey rounded-xl flex items-center space-x-5 mr-20 p-5"
                  >
                    <div className="basis-1/4">
                      <img
                        className="w-24 rounded-sm"
                        src={item.product.image}
                        alt="product"
                      />
                    </div>
                    <div className="basis-2/4">
                      <h1 className="text-brand-red font-bold text-md">
                        {item.product.name}
                      </h1>
                      <p className="text-brand-red text-xs">
                        {dateFormat(item.createdAt, "dddd, d mmmm yyyy")}
                      </p>
                      <p className="text-brand-red text-xs mt-2">
                        {dateFormat(item.createdAt, "HH:MM")} WIB
                      </p>
                      <p className="text-white text-md font-bold mt-5">
                        Price : {rupiahFormat.convert(item.price)}
                      </p>
                    </div>
                    <div
                      className={`status-transaction-${item.status} rounded-md p-5 font-bold text-center text-white basis-1/4`}
                    >
                      {item.status}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="no-data-transaction">No transaction</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
