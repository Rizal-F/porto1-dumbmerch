import React, { useState, useEffect } from "react";
// import NavbarAdmin from "../component/navbar/navbarAdmin";
import NavbarAll from "../component/auth/navbar";
import { useNavigate } from "react-router";

import { API } from "../config/api";

const AddProduct = () => {
  const title = "Product Admin";
  document.title = "DumbMerch | " + title;

  let navigate = useNavigate();

  const [preview, setPreview] = useState(null); //For image preview
  const [form, setForm] = useState({
    image: "",
    name: "",
    desc: "",
    price: "",
    qty: "",
  }); //Store product data

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };
      // Store data with FormData as object
      const formData = new FormData();
      formData.set("image", form.image[0], form.image[0].name);
      formData.set("name", form.name);
      formData.set("desc", form.desc);
      formData.set("price", form.price);
      formData.set("qty", form.qty);
      // formData.set("categoryId", categoryId);

      // Insert product data
      const response = await API.post("/product", formData, config);
      // console.log(response);
      console.log(formData);

      navigate("/product");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-black">
      <NavbarAll title={title} />
      <div>
        <h1 className="text-white text-2xl font-bold ml-32 mb-10 ">
          Add Product
        </h1>
        <div className="flex justify-center">
          <div className=" flex-col w-4/5">
            <form onSubmit={handleSubmit}>
              {preview && (
                <div>
                  <img
                    src={preview}
                    style={{
                      maxWidth: "150px",
                      maxHeight: "150px",
                      objectFit: "cover",
                    }}
                    alt="preview"
                  />
                </div>
              )}
              <div class="flex items-center cursor-pointer">
                <label class="block cursor-pointer">
                  <span class="sr-only cursor-pointer">
                    Choose profile photo
                  </span>
                  <input
                    type="file"
                    id="upload"
                    name="image"
                    hidden
                    onChange={handleChange}
                    class="block w-full my-1 cursor-pointer text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-brand-red file:text-white
                        hover:file:bg-brand-red-hover 
                        "
                  />
                </label>
              </div>
              <input
                type="text"
                placeholder="Product Name"
                name="name"
                onChange={handleChange}
                class="text-white bg-brand-grey-light w-full my-2 px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10"
              />
              <textarea
                placeholder="Product Desc"
                name="desc"
                onChange={handleChange}
                cols="144"
                rows="5"
                class="text-white bg-brand-grey-light w-full my-2 px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10"
              ></textarea>
              <input
                type="number"
                placeholder="Price (Rp.)"
                name="price"
                onChange={handleChange}
                class="text-white bg-brand-grey-light w-full my-2 px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10"
              />
              <input
                type="number"
                placeholder="Stock"
                name="qty"
                onChange={handleChange}
                class="text-white bg-brand-grey-light w-full my-2 px-3 py-2 border-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-zinc-400 focus:z-10"
              />

              <button className="bg-green-600 hover:bg-green-800 my-2 w-full px-3 py-2 mb-10 rounded-md text-white font-semibold">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
