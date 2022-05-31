import React from "react";
import NavbarAdmin from "../component/navbar/navbarAdmin";

const EditProduct = () => {
  const title = "Product Admin";
  return (
    <div className="h-screen bg-black">
      <NavbarAdmin title={title} />
      <div>
        <h1 className="text-white text-2xl font-bold ml-32 mb-10 ">
          Edit Product
        </h1>
        <div className="flex justify-center">
          <div className=" flex-col w-4/5">
            <form class="flex items-center cursor-pointer">
              <label class="block cursor-pointer">
                <span class="sr-only cursor-pointer">Choose profile photo</span>
                <input
                  type="file"
                  class="block w-full my-1 cursor-pointer text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-brand-red file:text-white
                        hover:file:bg-brand-red-hover 
                        "
                />
              </label>
            </form>
            {/* <label htmlFor="category" class="sr-only">
            category Address
        </label> */}
            <input
              type="text"
              id="product"
              name="product"
              placeholder="Product"
              class="text-white bg-brand-grey-light w-full my-2 px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10"
            />
            <textarea
              name="description"
              id="description"
              placeholder="Description"
              cols="144"
              rows="5"
              class="text-white bg-brand-grey-light w-full my-2 px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10"
            ></textarea>
            <input
              type="text"
              id="price"
              name="price"
              placeholder="Price"
              class="text-white bg-brand-grey-light w-full my-2 px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10"
            />
            <input
              type="text"
              id="stock"
              name="stock"
              placeholder="Stock"
              class="text-white bg-brand-grey-light w-full my-2 px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10"
            />

            <button className="bg-green-600 hover:bg-green-800 my-2 w-full px-3 py-2 rounded-md text-white font-semibold">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
