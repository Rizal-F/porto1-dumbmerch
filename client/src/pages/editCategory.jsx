import React from "react";
import NavbarAdmin from "../component/navbar/navbarAdmin";

const EditCategory = () => {
  const title = "Category Admin";
  return (
    <div className="h-screen bg-black">
      <NavbarAdmin title={title} />
      <div>
        <h1 className="text-white text-2xl font-bold ml-32 ">Edit Category</h1>
        <div className="flex justify-center">
          <div className=" flex-col w-4/5">
            {/* <label htmlFor="category" class="sr-only">
            category Address
          </label> */}
            <input
              type="category"
              id="category"
              name="category"
              placeholder="Category"
              class="text-white bg-brand-grey-light w-full my-10 px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10"
            />
            <button className="bg-green-600 hover:bg-green-800 w-full px-3 py-2 rounded-md text-white font-semibold">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCategory;
