import React, { useState } from "react";
// import NavbarAdmin from "../component/navbar/navbarAdmin";
import NavbarAll from "../component/auth/navbar";
import { useNavigate } from "react-router";

import { API } from "../config/api";

const AddCategory = () => {
  const title = "Category Admin";
  document.title = "DumbMerch | " + title;

  let navigate = useNavigate();
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          Authorization: "Basic " + localStorage.token,
          "Content-type": "application/json",
        },
      };

      // Data body
      const body = JSON.stringify({ name: category });

      // Insert category data
      const response = await API.post("/category", body, config);
      console.log(body);

      navigate("/category-admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-black">
      <NavbarAll title={title} />
      <div>
        <h1 className="text-white text-2xl font-bold ml-32 ">Add Category</h1>
        <div className="flex justify-center">
          <div className=" flex-col w-4/5">
            <form>
              <input
                onChange={handleChange}
                placeholder="category"
                // value={category}
                name="category"
                class="text-white bg-brand-grey-light w-full my-10 px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10"
              />
              <button
                onClick={handleSubmit}
                className="bg-green-600 hover:bg-green-800 w-full px-3 py-2 rounded-md text-white font-semibold"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
