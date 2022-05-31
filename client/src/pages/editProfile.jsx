import React from "react";
import NavbarAdmin from "../component/navbar/navbar";
import imgBlank from "../assets/blank-profile.png";

const EditProfile = () => {
  const title = "Profile";
  return (
    <div className="h-screen bg-black">
      <NavbarAdmin title={title} />
      <div>
        <h1 className="text-white text-2xl font-bold ml-32 mb-10 ">
          Edit Profile
        </h1>
        <div className="flex justify-between mx-32">
          <div className=" flex-col w-3/5">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              class="text-white bg-brand-grey-light w-full px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10"
            />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              class="text-white bg-brand-grey-light w-full my-2 px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10"
            />
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Phone"
              class="text-white bg-brand-grey-light w-full my-2 px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10"
            />
            <select
              name="gender"
              id="gender"
              className="text-white bg-brand-grey-light w-full my-2 px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10"
            >
              <option value="Man">Select Gender</option>
              <option value="Man">Man</option>
              <option value="Woman">Woman</option>
            </select>
            <textarea
              name="address"
              id="address"
              placeholder="Address"
              cols="144"
              rows="2"
              class="text-white bg-brand-grey-light w-full my-2 px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10"
            ></textarea>

            <button className="bg-green-600 hover:bg-green-800 my-2 w-full px-3 py-2 rounded-md text-white font-semibold">
              Save
            </button>
          </div>
          <div className="flex flex-col items-end">
            <img src={imgBlank} alt="" className="w-72 rounded-md" />
            <form class="flex items-center justify-between">
              <label class="block cursor-pointer">
                <span class="sr-only cursor-pointer">Profile Photo</span>
                <input
                  type="file"
                  class="block w-full my-1 cursor-pointer text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-brand-red file:text-white
                        hover:file:bg-brand-red-hover file:cursor-pointer
                        "
                />
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
